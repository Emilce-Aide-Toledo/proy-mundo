import APIRequest from "../utils/config/axios.config";

export const getRandomUser = () =>{
    return APIRequest.get('/', {
        validateStatus: function(status){
            return status < 500;
        }
    }) // https://randomuser.me/api/
}