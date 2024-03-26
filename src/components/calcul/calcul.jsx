import React, { useState } from 'react'
import './calcul.css'

export const Calcul = () => {
     const [value, setvalue] = useState('');
    // function changes(){
    //  value = setvalue(value + e.target.value)
    // }
  return (
    <div className='container'>
        <div className="bodys">
            <input value={value} />
        </div>
            <div className="rows">
                <input type="button" className='clear' value="AC" onClick={e => setvalue('')}/>
                <input type="button" className='clear' value="DE" onClick={e => setvalue(value.slice(0,-1))}/>
                <input type="button" className='clear' value="%" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='signe' value="/" onClick={e =>setvalue(value + e.target.value)}/>
            </div>
            <div className="rows">
                <input type="button" className='number' value="7" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="8" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="9" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='signe' value="*" onClick={e =>setvalue(value + e.target.value)}/>
            </div>
            <div className="rows">
                <input type="button" className='number' value="4" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="5" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="6" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='signe' value="-" onClick={e =>setvalue(value + e.target.value)}/>
            </div>
            <div className="rows">
                <input type="button" className='number' value="1" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="2" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="3" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='signe' value="-" onClick={e =>setvalue(value + e.target.value)}/>
            </div>
            <div className="rows">
                <input type="button" className='number' value="00" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="0" onClick={e =>setvalue(value + e.target.value)}/>
                <input type="button" className='number' value="." onClick={e =>setvalue(value + e.target.value)}/>
                {/* eslint-disable-next-line */}
                <input type="button" className='signe' value="=" onClick={() => setvalue(eval(value))}/>
            </div>
    
    </div>
  )
}
export default Calcul;