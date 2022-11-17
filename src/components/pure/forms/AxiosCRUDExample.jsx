import React from 'react';
import { login } from '../../../services/FetchService';

const AxiosCRUDExample = () => {

    const authUser = () => {
       login('eve.holt@reqres.in', 'cityslicka')
         .then((res)=>{
            if(res.data.token){ 
               console.log(JSON.stringify(res.data.token))
               sessionStorage.setItem('token', res.data.token)
            } else {
                sessionStorage.removeItem('token')
                throw new Error('Login failure')
            }
          })
          .catch((err)=>{
            alert(`Something went wrong ${err}`)
            sessionStorage.removeItem('token')           
          })
          .finally(()=> console.log(`Login done`))
    }

    return (
        <div>
            <button onClick={authUser}>Login</button>
        </div>
    );
}

export default AxiosCRUDExample;
