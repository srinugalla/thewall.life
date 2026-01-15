pipeline {
    agent any

    environment {
        APP_NAME = "thewall"
    }

    stages {
        

        stage('Build Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Tests') {
            steps {
                echo "No tests yet"
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo "Deployment successful 🚀"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}

