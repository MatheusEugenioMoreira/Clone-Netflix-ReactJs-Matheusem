import React from 'react';
import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"/>
            </div>
            <div className="header--user">
                <img src="https://occ-0-2371-1380.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABXMnAqpgxL5LTvIlIelMTFybwWX9iB3umEgYgeRIsAk2SS3iSR8D08QWuFU6JL2c230cdZHtvmHrWNoB516z44k.png?r=e1f"/>
            </div>
        </header>
    )
}