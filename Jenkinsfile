pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
               git branch: 'main', url: 'https://github.com/yashpatle741/First-Devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t first-project .'
            }
        }

        stage('Stop & Remove Container') {
            steps {
                sh 'docker stop first-container || true'
                sh 'docker rm first-container || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name first-container first-project'
            }
        }
    }
}