pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t jenkins-demo-app .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'docker run --rm jenkins-demo-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker stop jenkins-demo-app-container || true'
                sh 'docker rm jenkins-demo-app-container || true'
                sh 'docker run -d --name jenkins-demo-app-container -p 3001:3000 jenkins-demo-app'
            }
        }
    }

    post {
        success {
            echo ' Pipeline completed successfully!'
        }
        failure {
            echo ' Pipeline failed.'
        }
    }
}
