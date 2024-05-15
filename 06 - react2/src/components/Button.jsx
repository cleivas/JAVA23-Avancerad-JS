import { useState } from "react";

function Button() {
    const [cssColor, setCssColor] = useState('bg-blue');
    const [counter, setCounter] = useState(0);

    function handleClick(event){
        console.log(event.target)
        setCounter(counter+1)
        // Lägg till så att knappen alltid visar hur många gånger användaren har klickat på den
    }

    function handleEnter(){
        setCssColor('bg-pink');
        console.log('enter', cssColor)
    }
    function handleLeave(){
        setCssColor('bg-blue');
        console.log('leave', cssColor)
    }

    return ( 
        <>
        <button onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={cssColor} >{counter}</button>
        </>
        );
}

export default Button;