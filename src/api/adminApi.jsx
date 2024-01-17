import axios from "axios";

const AdminApi = axios.create({
  baseURL: `http://localhost:3000/admin`,
});

//============================== ADDMIN SIGNIN =================================//
export async function AdminSignIn(userData) {
  try {
    const admindata = await AdminApi.post("/login", userData);
    console.log(admindata, "admindata");
    return admindata;
  } catch (error) {
    console.log(error);
  }
}
export async function LoadUserList(userData) {
  try {
    const admindata = await AdminApi.post("/loadusers", userData);
    console.log(admindata, "admindata");
    return admindata;
  } catch (error) {
    console.log(error);
  }
}

export async function LoadTutorList(tutorData) {
  try {
    const admindata = await AdminApi.post("/loadtutor", tutorData);
    console.log(admindata, "admindata");
    return admindata;
  } catch (error) {
    console.log(error);
  }
}

export async function BlockUnblockuser(userData) {
  try {
    console.log(userData, "u3333######3");
    const admindata = await AdminApi.put("/blockuser", userData);
    console.log(admindata, "admindata");
    return admindata;
  } catch (error) {
    console.log(error);
  }
}

export async function BlockUnblockTutor(tutorData){
    try {
        console.log(tutorData,'u3333######3');
        const admindata = await AdminApi.put('/blocktutor',tutorData)
        console.log(admindata,'admindata');
        return admindata
    } catch (error) {
       console.log(error) 
    }
    }
