API_BASE_URL= "vsefbef"

export const apiEndpoints ={
    user:{
        signup:`${API_BASE_URL}/user/signup`,
        signin:`${API_BASE_URL}/user/signin`
    },
    scan:{
        create:`${API_BASE_URL}/scan/create`,
        list:`${API_BASE_URL}/scan/list`,
    }

};