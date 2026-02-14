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

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test:unit'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
