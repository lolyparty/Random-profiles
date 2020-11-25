import React from 'react';
import {Search} from './searchinput/search-component'
import {Cardgrid} from './cards-grid/cards-grid-component'

 const App = ()=>{
     return <div className="container">
     <h1 className="name">Profiles</h1>
        <Search />
        <Cardgrid />
     </div>
 }

 export {App}