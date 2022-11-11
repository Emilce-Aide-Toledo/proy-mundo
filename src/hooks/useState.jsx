/**
 * Ejemplo de uso de Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a traveés de un hook y, además, poder modificarlo
 * 
 */
import React, { useState } from "react";

const EjemploState = () => {

    //Valor inicial para un contador 
    const valorInicial = 0;

    //Valor inicial para una personas 
    const personaInicial = {
        nombre: 'Emilce',
        email: 'emi@group.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio 
     * y que éste se vea reflejado en la vista del componente 
     * 
     * const [nombreVariable, funcionParaCambiar] = useSate(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */

    const incrementContador = () =>{
        //? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */

    const updatePersona = () => {
        setPersona(
            {
                nombre: 'Emily',
                email: 'nuevo@group.com'
            }
        )
    }

    return(
      <div>
        <h1> ***Ejemplo de useState() *** </h1>
        <h2> CONTADOR: {contador} </h2>
        <h2> DATOS DE LA PERSONA: </h2>
        <h3> NOMBRE: {persona.nombre} </h3>
        <h4> EMAIL: {persona.email} </h4>
        {/* Bloque de botones para actualizar el estado del componente  */}
        <button onClick={incrementContador}> Incrementar Contador </button>
        <button onClick={updatePersona}> Actualizar Persona </button>
      </div>
    )
}

export default EjemploState;