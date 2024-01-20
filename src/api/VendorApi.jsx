import axios from 'axios';

const TutorApi=axios.create({
    baseURL:'http://localhost:3000/vendor'
})
export async function TutorSignUp(signUpData){
    try{
        console.log(signUpData,'222222222222');
        const data=await TutorApi.post('/vendor/signup',signUpData,{headers:{
            "Content-Type": "multipart/form-data",
           }});
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

export async function tutorLogin(loginData){
    try {
        const data2 = await TutorApi.post('/vendor/login',loginData)
        console.log(data2,'sadasa2wewq');
        return data2
    } catch (error) {
        console.log(error)
    }
}
export async function tutorRegisterGoogle(tutorData) {
    try {
      const response = await TutorApi.post("/vendor/tutorRegisterWithGoole", tutorData);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
 

