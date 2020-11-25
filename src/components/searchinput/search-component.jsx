import React from 'react'

const Search = ()=>{

    return <div className="searchinput">
        <form className="inputform">
        <input placeholder="search" type="text" name="name" />
        <button className="btn">search</button>
    </form>
    </div>
}

export {Search}