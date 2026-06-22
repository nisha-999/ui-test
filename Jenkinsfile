pipeline {
    agent any

    stages {

        stage('Show Selected Ref') {
            steps {
                echo "Selected Git Ref: ${params.GIT_REF}"
            }
        }

        stage('Checkout Selected Ref') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "${params.GIT_REF}"]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/nisha-999/ui-test.git'
                    ]]
                ])
            }
        }

        stage('Verify Checkout') {
            steps {
                sh 'git branch -a'
                sh 'git tag'
                sh 'git log --oneline -1'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying ${params.GIT_REF}"
            }
        }
    }
}