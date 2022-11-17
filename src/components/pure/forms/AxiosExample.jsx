import React, {useState, useEffect} from 'react';
import { getRandomUser } from '../../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    // useEffect(() => {
    //    obtainUser()

    // }, []);

    const obtainUser = () => {
        getRandomUser()
        .then((res)=> {
            if(res.status === 200){
                console.log(res)
                setUser(res.data.results[0])
            }
        })
        .catch((err)=>{
            alert(`Something went wrong: ${err}`)
        })        
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {user !== null ?
              (
                 <div>
                    <img alt='Imagen de perfil' src= {user.picture.medium}/>
                    <h2> {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                 </div>
                )
            :
             (   
                <div>
                <p>Generate a new User</p>
                </div>
                )}
                <button onClick={obtainUser}> Random User </button>
        </div>
    );
}

export default AxiosExample;
