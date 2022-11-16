import React, {useState, useEffect} from 'react';
import { getAllPageUsers, getAllUsers, getUserDetails } from '../../../services/FetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);

    useEffect(() => {
       obtainUsers()
    }, []);

    const obtainUsers = () =>{
        getAllUsers()
          .then((res)=>{
            // if(res.status===200 && res.ok){
            //     res.json().then((body)=>{
            //         console.log(`All Users ${body.data}`)
            //         setUsers(body.data)
            //     }).catch((err)=> console.log(`Something went wrong: ${err}`))
            // }
                console.log(`All Users ${res.data}`);
                setUsers(res.data);
                setTotalUsers(res.total)
                setUsersPerPage(res.per_page)
                setPages(res.total_pages)
          })
          .catch((err)=>{
            alert(`Error while retreiving the users: ${err}`)
          })
          .finally(()=>{
            console.log('Finally. Users: ')
            console.table(users)
          })
    }

    const obtainPageUsers = (page)=>{
        getAllPageUsers(page)
           .then((res)=>{
                console.log(`All Paged Users ${res.data}`);
                setUsers(res.data);
                setTotalUsers(res.data.length)
                setUsersPerPage(res.per_page)
                setPages(res.total_pages)
          })
          .catch((err)=>{
            alert(`Error while retreiving the users: ${err}`)
          })
          .finally(()=>{
            console.log('Finally. Users: ')
            console.table(users)
          })
        
    }

    const obtainUserDetails = (id)=>{
        getUserDetails(id)
        .then((res)=>{
            console.log(`All Paged Users ${res.data}`);
            setSelectedUser(res.data);
      })
      .catch((err)=>{
        alert(`Error while retreiving the user: ${err}`)
      })
      .finally(()=>{
        console.log('Finally. User: ')
        console.table(selectedUser)
      })
    
    }

    return (
        <div>
            <h2> Users: </h2>
            {users.map((user, index)=>
            (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                {user.first_name} {user.last_name}
            </p>)
            )}

            <p> Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPageUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPageUsers(2)}>
                2
            </button>
            <div>
                <h3> User Details</h3>
                {selectedUser && (
                    <div>
                        <p> Name: {selectedUser.first_name}</p>
                        <p> Last Name: {selectedUser.last_name}</p>
                        <p> Email: {selectedUser.email}</p>
                        <img alt='Imagen de perfil' src={selectedUser.avatar} style={{height:'150px', width:'150px'}}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchExample;
