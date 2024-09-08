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
        bat 'npm --prefix ./BackEnd run test'
        bat 'npm --prefix ./FrontEnd/LAPManagement run test'
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