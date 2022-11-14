import React, {useRef} from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    const pressButton = () =>{
        const text = messageRef.current.value
        alert(`Text dentro: ${text}`)
    }

    const pressButtonParams = (text) =>{
        alert(`Text: ${text}`)
    }

    const submitName = (e)=>{
        e.preventDefault();
        update(nameRef.current.value)
    }
    return (
        <div style={{background: 'cyan', padding:'30px'}}>
            <p onMouseOver={()=> console.log('Sobre <p>')}>
            Hola, {name}
            </p>
            <button onClick={() => console.log('Botón 1 pulsado')}> Botón 1</button>
            <button onClick={pressButton}> Botón 2</button>
            {/** se debe hacer dentro de una función anonima */}
            <button onClick={() => pressButtonParams('emi')}> Botón 3</button>
            <input 
                placeholder='Inserte el texto'
                onFocus={()=> console.log('Focus')}
                onChange = {(e)=> console.log('Change', e.target.value)}
                onCopy={()=> console.log('Copiaste el texto')}
                ref ={messageRef}
            />
            <button onClick={() =>send(messageRef.current.value)}>
             Enviar Mensaje 
             </button>
             <div style={{marginTop:'20px'}}>
             <form onSubmit={submitName}>
                <input 
                    ref={nameRef}
                    placeholder='Nuevo Nombre'
                />
                <button type='submit'>Actualizar</button>
             </form>

             </div>
        </div>
    );
}

export default Child;
