import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './UserInfo.css';
import {Card,Button} from "react-bootstrap";

const UserInfo = (props) => {
    //console.log(props.userinfo);
    const {name,img,salary} = props.userinfo;
    return (
       <div className="userinfo pb-5 mt-3 ">
        <Card style={{ width: '15rem' }}>
            <div >
            <Card.Img className="image" variant="" src={img} />
            </div>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>৳{salary}</Card.Text>
            <Button variant="success" onClick ={()=>props.addUser(props.userinfo)} ><FontAwesomeIcon icon={faUserPlus}/> add in club</Button>
        </Card.Body>
        </Card>
        </div>   
    );
};

export default UserInfo;