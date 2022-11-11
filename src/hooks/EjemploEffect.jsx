/**
 * Ejemplo de uso de:
 * -useSatet()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const EjemploEffect = () => {
     
    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    const increment1 = () => {
        setContador1(contador1 + 1)
    }

    const increment2 = () => {
        setContador2(contador2 + 1)
    }
    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente 
     * se ejecuta aquello que esté dentro del useEffect
     */

    // useEffect(()=>{
    //     console.log('Cambio en el estado el componente');
    //     console.log('Mostrando Referencia a elemento del DOM: ');
    //     console.log(miRef);
    // })


     /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador1 se ejecutara
     * Si existe un cambio en contador2, no se ejecutara
     */

    //  useEffect(()=>{
    //     console.log('Cambio en el estado del contador 1');
    //     console.log('Mostrando Referencia a elemento del DOM: ');
    //     console.log(miRef);
    // }, [contador1])


     /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador1 se ejecutara
     * Si existe un cambio en contador2,  tambien se ejecutara
     */

      useEffect(()=>{
            console.log('Cambio en el estado del contador 1 o contador 2');
            console.log('Mostrando Referencia a elemento del DOM: ');
            console.log(miRef);
        }, [contador1, contador2])
    return (
        <div>
              <h1> ***Ejemplo de useState(), useRef() y useEffect *** </h1>
              <h2>CONTADOR 1: {contador1}</h2>
              <h2>CONTADOR 2: {contador2}</h2>
              {/* Elemento referenciado */}
              <h4 ref={miRef}> Ejemplo de elemento referenciado </h4>
              {/* Botones para cambiar los contadores */}
              <div>
                <button onClick={increment1}>Incrementar contador 1</button>
                <button onClick={increment2}>Incrementar contador 2</button>
              </div>
        </div>
    );
}

export default EjemploEffect;
