import axios from 'axios';

const UserApi = axios.create({
    baseURL:`http://localhost:3000`
})
export async function userSignUp(signUpData){
    try {    
        console.log(signUpData);
        const data = await UserApi.post('/signup',signUpData)
        return data
    } catch (error) {
        console.log(error);
    }
}
export async function userLogin(loginData){
    try {
        const data2 = await UserApi.post('/login',loginData)
        console.log(data2,'ttttttttttttttttt');
        return data2
    } catch (error) {
        console.log(error)
    }
}