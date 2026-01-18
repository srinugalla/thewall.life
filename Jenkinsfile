pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }
    stages {
        stage('Clean Workspace') {
            steps { deleteDir() }
        }
        stage('Checkout SCM') {
            steps { checkout scm }
        }
        stage('Build Images') {
            steps { sh 'docker compose build' }
        }
        stage('Deploy') {
            steps { sh 'docker compose up -d' }
        }
    }
}
