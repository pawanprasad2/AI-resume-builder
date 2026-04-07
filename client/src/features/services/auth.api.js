import axios from "axios"


export async function register({ username, email, password }) {
    try {
        const response= await axios.post("http://localhost:3000/api/auth/register",{
            username,email,password
        },{
            withCredentials:true
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
    
}


export async function login({email,password}){
   try {
     const response= await axios.post("http://localhost:3000/api/auth/login",{
        email,password
    },{
        withCredentials:true
    })

    return response.data
   } catch (error) {
    console.log(error)
   }
}


export async function logout() {
    try {
        const response=await axios.get("http://localhost:3000/api/auth/logout",{
            withCredentials:true
        })

        return response.data
        
    } catch (error) {
        console.log(error)
    }
}


export async function get_me(){
    try{
        const response= await axios.get("http://localhost:3000/api/auth/get-me",{
            withCredentials:true
        })
    }catch(error){
        console.log(error)
    }
}