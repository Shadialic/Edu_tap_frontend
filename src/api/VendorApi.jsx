import axios from 'axios';

const TutorApi=axios.create({
    baseURL:'http://localhost:3000/vendor'
})
export async function TutorSignUp(signUpData){
    try{
        const data=await TutorApi.post('/vendor/signup',signUpData);
        console.log(data,'222222222222222222222222222');
        return data
    }catch(err){
        console.log(err);
    }
}

export async function TutorSendingOtp(otpData){
    try{
        const data=await TutorApi.post('/vendor/sendotp',otpData);
        return data
    }catch(err){
        console.log(err);
    }
}

export async function TutorVerifyOtp(otpData){
    try{
        const data=await TutorApi.post('/vendor/verifyotp',otpData);
        return data
    }catch(err){
        console.log(err);
    }
}

export async function userLogin(loginData){
    try {
        const data2 = await UserApi.post('/vendor/login',loginData)
        console.log(data2);
        return data2
    } catch (error) {
        console.log(error)
    }
}



