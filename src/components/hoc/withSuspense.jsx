
import React from "react";
import preloader from '../../images/2.gif';

export const withSuspense = (Component) => {
    
    return (props) =>{
        return <React.Suspense fallback ={<img src={preloader} />}>
             <Component {...props}/>
        </React.Suspense>
       
    }
}