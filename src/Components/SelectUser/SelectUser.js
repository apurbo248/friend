import React from 'react';
import './SelectUser.css'
import {Card} from 'react-bootstrap';

const SelectUser = (props) => {
 console.log(props);
   const total =props.selectedUser.reduce((total1, prd) => total1 + prd.salary,0);
    return (
        <div className="userinfo">    
           <h4>{props.selectedUser.length} new friend added in club</h4>
           <h5>Donate: ৳ {total}</h5>
             <div>
            {props.selectedUser.map(n=> 
             <div className="all">
               <div className="cartimg">
               <img src={n.img}></img>
               </div>
                <div className="text">
                <h5>{n.name} </h5> <h6>৳{n.salary}</h6>
                </div>
                </div> )}
                </div>
       </div>
    );
};

export default SelectUser;