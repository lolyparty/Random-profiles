import React, { useEffect, useState } from 'react'
import {Card} from '../cards/cards-component'


const Cardgrid = (props)=>{
    const [cardState, setCardState] = useState()

    

    useEffect(()=>{
        const getData = async ()=>{
            
            const reponse = await fetch('http://jsonplaceholder.typicode.com/users')
            const data = await reponse.json()
            setCardState(data)
            // 
    }
    getData()
        
}, [])

    return <div className="cards-grid">
    {cardState && cardState.map((item)=>{
        if(item.name.toLowerCase().includes(props.searched.toLowerCase())){
            return (
                <Card
        key={item.id}
        src={`https://robohash.org/${item.id}`}
        email={item.email}
        name={item.name}
        
         />
            )
        }
    })}
    </div>
}

export {Cardgrid}
