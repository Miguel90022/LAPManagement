pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm install ./BackEnd'
        bat 'npm install ./FrontEnd/LAPManagement'
      }
    }
    
    stage('Run Jest Tests') {
      steps {
        echo 'Running jests tests...'
        bat 'npm run test ./BackEnd'
        bat 'npm run test ./FrontEnd/LAPManagement'
      }
    }

    stage('Build containers') {
      steps {
        echo 'Building Docker containers...'
        bat 'docker compose up -d --build'
      }
    }
  }
}