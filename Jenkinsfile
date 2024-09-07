pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        echo 'Installing dependencies...'
      }
    }
    
    stage('Run Jest Tests') {
      steps {
        echo 'Running jests tests...'
      }
    }

    stage('Build containers') {
      steps {
        echo 'Building Docker containers...'
      }
    }
  }
}