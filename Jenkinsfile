pipeline {
    agent any

    tools {
        nodejs "NodeJS_20"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test:unit'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
