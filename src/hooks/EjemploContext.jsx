/**
 * Ejemplo
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre 
 */
const miContexto = React.createContext(null); 
    

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con los 
    // datos del contexto padre 
    const state  = useContext(miContexto);

    return (
        <div>
            <h2> La Token es: {state.token}</h2>
            {/*Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state  = useContext(miContexto);

    return (
        <div>
            <h2> La sesión es: {state.sesion}</h2>
        </div>
    );
}


export const EjemploContext = () => {
    
    const estadoInicial = {
        token: '67755689',
        sesion: 1
    };

    // Creamos el estado de este componente 
    const [sesionData, setSesionData] = useState(estadoInicial);

    const updateSession = () => {
        setSesionData(
            {
                token: 'JWT67790980803',
                sesion: sesionData.sesion + 1 
            }
        )
    }

    return (
      <div>
        <miContexto.Provider value = { sesionData } >
            {/* Todo lo que este aqui dentro puede leer los datos de sesionData */}
            {/*Además, si se actualiza los componentes de aqui, tambien se actualizan */}
             <h1> ***Ejemplo de useState() y useContext() ***</h1>
             <Componente1></Componente1>
             <button onClick={updateSession}>Actualiza sesión</button>
        </miContexto.Provider>
      </div>
    )
}
