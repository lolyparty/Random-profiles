import React from 'react'

const Search = (props)=>{
    

    return <div className="searchinput">
        <form className="inputform">
        <input placeholder="search" type="text" name="name" onChange={(e)=>{
            props.change(e)
        }}/>
        {/* <button className="btn" onClick={(e)=>{
            e.preventDefault()
            props.clicked()
        }}>search</button> */}
    </form>
    </div>
}

export {Search}