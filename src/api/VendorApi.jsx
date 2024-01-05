import axios from 'axios';

const TutorApi=axios.create({
    baseURL:'http://localhost:3000/vendor'
})
export async function TutorSignUp(signUpData){
    try{
        const data=await TutorApi.post('/vendor/signup',signUpData);
        return data
    }catch(err){
        console.log(err);
    }
}
