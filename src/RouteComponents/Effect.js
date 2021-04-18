import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';

function Effect () {

    const[count,setCount] = useState(0);
    const msg = useContext(UserContext);
    const divRef = React.useRef();
    const valueRef = React.useRef(90);

    useEffect(()=>{ 
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <div>{msg}</div>
            <button onClick={()=>setCount(count + 1)}>click {count} times</button>
            <div>
                value:{valueRef.current}
                <div id="divR" ref={divRef}>App,here</div>
                <button onClick={()=>valueRef.current = 88}>incr</button>
            </div>
        </div>
    );
};

export default Effect;