import React from 'react'

const Card = (props) =>{
    return <div className="card">
        <img className="profilepic" src={props.src} alt="Avatar"></img>
        <p className="name">{props.name}</p>
        <p className="Email">{props.email}</p>
    </div>
}

export {Card}