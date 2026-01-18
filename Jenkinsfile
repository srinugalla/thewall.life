pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Images') {
      steps {
        sh '''
          docker compose build
        '''
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker compose down || true
          docker compose up -d
        '''
      }
    }
  }
}
