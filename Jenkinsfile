pipeline {
    agent any

    tools {
        nodejs "NodeJS_22"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Deependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test Code') {
            steps {
                sh 'npm run test:unit'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
