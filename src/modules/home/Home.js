import React, { useEffect, useState } from 'react';
import Data from './view/Data';
import Login from './view/Login';

function Home(){
    const [token, setToken] = useState(null);
    const [id, setID] = useState(null);
    const [render, setRender] = useState(true);
    
    useEffect(() => {
        console.log('hello');
    },[render]);

    return (
        <div>
            {token? <Data token={token} id={id} setToken={setToken}/>:<Login setToken={setToken} setID={setID} />}
        </div>
    );
};

export default Home;