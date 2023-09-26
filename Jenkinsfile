pipeline {
  agent any

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  environment {
    ARTIFACT_ID = "elbuo8/webapp:${env.BUILD_NUMBER}"
  }
   stages {
   stage('Building image - GRUPO 4') {
      steps{
          sh '''
          docker rm -f testapp_nexus
          docker rm -f testapp_registry
          docker build -t 127.0.0.1:8082/grupo-4:testapp_nexus_2.1 .
             '''  
        }
    }
  
  
    stage('Run tests  -  THE') {
      steps {
        sh "docker run 127.0.0.1:8082/grupo-4:testapp_nexus_2.1 npm test"
      }
    }
   stage('Deploy Image - BEST !!!') {
      steps{
        sh '''
        docker login -u docker -p docker 127.0.0.1:8082
        docker push 127.0.0.1:8082/grupo-4:testapp_nexus_2.1
        docker logout 127.0.0.1:8082
        '''
        }
      }
    }
}


    
  

