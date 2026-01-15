pipeline {
  agent any

  stages {

    stage('Clean Workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Checkout Code') {
      steps {
        git branch: 'main',
            credentialsId: 'github-creds',
            url: 'https://github.com/srinugalla/thewall.life.git'
      }
    }

    stage('Build Images') {
      steps {
        sh '''
          docker-compose build --no-cache
        '''
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker-compose down || true
          docker-compose up -d --build
        '''
      }
    }
  }
}
