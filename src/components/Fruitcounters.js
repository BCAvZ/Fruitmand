import React from "react";

const Fruitcounter = ({fruit, setFruit, fruitId}) => {
    return (
         <>
             <div>
                <button disabled={fruit === 0} onClick={() => setFruit (fruit-1)}>-</button>
                <label htmlFor={fruitId}/>
                <input type='number' value={fruit} readOnly='value' name={fruit} id={fruitId} className={fruit !== 0 ? 'red-border' : 'no-border'}/>
                <button onClick={() => setFruit (fruit+1)}>+</button>
             </div>
         </>
    )
}

export default Fruitcounter

