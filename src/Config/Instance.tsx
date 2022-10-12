import axios from 'axios'

const token = localStorage.getItem("type_token") ;
const Instancee = axios({
    baseURL : `https://secondmorelive.herokuapp.com`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
    
})
console.log(123,token);
// Instancee.defaults.headers.common["Authorization"] = `Bearer ${token}`
export default Instancee;