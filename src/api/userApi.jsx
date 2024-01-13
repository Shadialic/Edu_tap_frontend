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
export async function UserSendingOtp(otpData){
    try{
        const data=await UserApi.post('/sendotp',otpData);
        return data
    }catch(err){
        console.log(err);
    }
}

export async function UserVerifyOtp(otpData){
    try{
        console.log('ssssssqqqqqq');
        const data=await UserApi.post('/verifyotp',otpData);
        console.log(data,'///////////////////////////');
        return data
    }catch(err){
        console.log(err);
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

export async function forgotPass(forgotData){
    try {
        console.log(forgotData,'forgotpass');
        const data = await UserApi.post('/forgotPass',forgotData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function passverifyOTP(newData){
    try{
        console.log('0000000002222222222222222222');
        const data=await UserApi.post('/newPass',newData);
        console.log(data,'///////111111111111111111111111////////////////////');
        return data
    }catch(err){
        console.log(err);
    }
}

export async function updatePass(updateData){
    try {
        const data = await UserApi.put('/updateaPass',updateData)
        console.log(data,'updatePass');
        return data
    } catch (error) {
        console.log(error)
    }
}




