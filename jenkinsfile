pipline{
    agent any{
        stages('clone code'){
            steps{
                git 'https://github.com/yashpatle741/First-Devops.git'
            }
            }
             stages('docker image'){
                steps{
                    sh 'docker build -t first-project .'
                }
        }
          stage('Stop & Remove Previous Container') {
            steps {
                sh '''
                    docker stop first-container || true
                    docker rm first-container || true
                '''
            }
        }
        stage('Docker Container Run') {
            steps {
                sh '''
                    docker run -d -p 3001:3000 --name first-container first-project
                '''
       
    }
}