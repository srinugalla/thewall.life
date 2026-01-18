pipeline {
  agent any

  stages {

    stage('Clean Workspace') {
      steps {
        deleteDir()
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
