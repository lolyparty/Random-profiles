import React, { Component, useEffect } from 'react'
import {Card} from '../cards/cards-component'


const Cardgrid = ()=>{
    const [cardState, setCardState] = React.useState()

    // React.useEffect(()=>{
    //     async ()=>{
    //         const reponse = await fetch('http://jsonplaceholder.typicode.com/users')
    //         const data = await reponse.json()
    //         setCardState(data)
    //     }
    // }, [])
    return <div className="cards-grid">
    {console.log(cardState)}
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
}

export {Cardgrid}
