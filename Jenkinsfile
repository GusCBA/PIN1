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
          #cd webapp
          #docker build -t testapp .
          docker build -t 127.0.0.1:5000/grupo-4:testapp_registry .
          
             '''  
        }
    }
  
  
    stage('Runing tests - THE') {
      steps {
        sh "docker run 127.0.0.1:5000/grupo-4:testapp_registry npm test"
      }
    }
   stage('Deploy Image - BEST !!!') {
      steps{
        sh '''
        #docker tag testapp 127.0.0.1:5000/grupo-4/testapp
        docker push 127.0.0.1:5000/grupo-4:testapp_registry   
        '''
        }
      }
    }
}


    
  

