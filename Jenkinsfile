pipeline {
  agent any

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  environment {
    ARTIFACT_ID = "elbuo8/webapp:${env.BUILD_NUMBER}"
  }
   stages {
   stage('Building image') {
      steps{
          sh '''
          #cd webapp
          #docker build -t testapp .
          docker build -t 127.0.0.1:8082/grupo-4:testapp_nexus .
             '''  
        }
    }
  
  
    stage('Run tests') {
      steps {
        sh "docker run grupo-4:testapp_nexus npm test"
      }
    }
   stage('Deploy Image') {
      steps{
        sh '''
        docker login -u docker -p docker 127.0.0.1:8082
        #docker tag testapp 127.0.0.1:8082/grupo-4:testapp_nexus
        docker push 127.0.0.1:8082/grupo-4:testapp_nexus
        docker logout 127.0.0.1:8082
        '''
        }
      }
    }
}


    
  

