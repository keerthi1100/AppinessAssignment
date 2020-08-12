
import {REQUEST_USER_CRED, USER_LOGIN_SUCCESS_LOGIN_DATA} from './types'

export const userAuthgetAction =()=>{
   
    return {
        type:REQUEST_USER_CRED,
        
    }

    
}

export const userDetailsget =(data)=>{
   
    return {
        type:USER_LOGIN_SUCCESS_LOGIN_DATA,
       
    }
}

