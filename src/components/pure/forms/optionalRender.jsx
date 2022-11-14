import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;

//? Estilo para usuario logueado
const loggedStyle ={
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
};
//?Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeigth: 'bold'
}

//Login /Logout buttons
const LoginButton = ({loginAction, propStyle}) =>{
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) =>{
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//?(Expresión true) && expresión => se renderiza la expresión
//?(Expresión false) && expresión => no se renderiza la expresión


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    // const updateAccess = () =>{
    //     setAccess(!access)
    // }

    const loginAction = ()=> {
        setAccess(true)
    }

    const logoutAction = ()=> {
        setAccess(false)
    }

    let optionalButton; 

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle}  logoutAction={logoutAction}></LogoutButton>
    }else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    const addMessages = () =>{
        setNMessages(nMessages + 1)
    }

    return (
        <div>
        {/**Botón de opciones */}
            {optionalButton}
            {/**N mensajes sin leer */}
            {/* {nMessages === 1 && <p>Tienes {nMessages} nuevo mensaje</p>}
            {nMessages > 1 && <p>Tienes {nMessages} nuevos mensajes</p>}
            {nMessages === 0 && <p> No hay nuevos mensajes</p>} */}
            {/* Operador Ternario */}
            {access? (
                 <div>
                 {nMessages > 0? 
                 <p>Tienes {nMessages} nuevo{nMessages>1?'s': null} mensaje{nMessages>1?'s': null}</p> : 
                 <p> No hay nuevos mensajes</p> } 
                 <button onClick={addMessages}>{nMessages === 0 ? 'Añade tu primer mensaje':'Agregar nuevo mensaje'}</button>
                 </div>
                 ) : null}
        </div>
    );
}

export default OptionalRender;
