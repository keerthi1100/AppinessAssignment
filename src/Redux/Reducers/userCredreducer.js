
import {REQUEST_USER_CRED, USER_LOGIN_SUCCESS_LOGIN_DATA} from '../Actions/types'

const initialState = {

    userCorretCred: {
    userID:"hruday@gmail.com",
    password:"hruday123",
    },

    userDetails:{
        user: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",
    
                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
        ]
    },
 
 };
    const userDetailReducer = (state = initialState , action) => {
        
       switch(action.type){
       case REQUEST_USER_CRED :{
       return{
       ...state,
       }}
 
       case USER_LOGIN_SUCCESS_LOGIN_DATA :{
          return{
          ...state,
         
          }}
     
 
       default:{
       return state;
       }}}


       export default userDetailReducer;