import React from 'react';

const display=(props)=>{
 const recipe=props.data.map((r)=>{
        return( <div className="col-md-4">
        <div className="card">
                        <img className="card-img-top image" src={r.image_url}/>
                        <div className="card-body">
                            <h5 className="card-title">{r.title.length< 20 ? `${r.title}`:`${r.title.substring(0,20)}...`}</h5>
                            <p className="card-text">publisher: {r.publisher}</p>
                            <a href={r.f2f_url} className="btn btn-primary">Method</a>
                        </div> 
                 </div>
                 </div>
        )
 })
    return(<div className="container" >
            <div className="row">
            {recipe}

            </div>

            
              
            
                 
           </div>
    );
}
export default display;