import React from 'react';



const input=(props)=>{
    return(<div>
           <form onSubmit={props.search}>
               <input className="input-q" type="text" placeholder="Search The Recipe" name="recipe"/>
               <button className="btn btt">Search</button>
           </form>


          </div>
    )
}
export default input;