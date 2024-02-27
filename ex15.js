function solution(young, beautiful, loved) {
    if(young && beautiful && loved) {
        return false
    }else if(young && !beautiful && loved) {
        return true
    }else if(!young && !beautiful && loved){
        return true
    }else if(!young && beautiful && loved){
         return true
    }else if(young && beautiful && !loved) {
        return true
    }else{
        return false
    }
 }