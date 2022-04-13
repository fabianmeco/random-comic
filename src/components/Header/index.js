import React from 'react';
import './Header.scss';

function Header ({title}){
    return (<div className="header-title"><h1>{title}</h1></div>)
}

export {Header};