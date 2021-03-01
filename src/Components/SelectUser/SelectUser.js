import React from 'react';
import './SelectUser.css'
import {Card} from 'react-bootstrap';

const SelectUser = (props) => {
    const selectedUser = props.selectedUser;
    console.log(selectedUser);
    const total =selectedUser.reduce((total, prd) => total + prd.salary,0);
    return (
        <div>
            <div>
              
                <h4>Added new friend - {total}</h4>
               {/* <h4>Added user- {selectedUser.length}</h4> */}
            </div>
         {/* <div className="userinfo pb-5 mt-3 ">
        <Card style={{ width: '15rem' }}>
            <div className="img">
            <Card.Img className="image" variant="" src="" />
            </div>
        <Card.Body>
            <Card.Title>a</Card.Title>
            <Card.Text>c</Card.Text>
        </Card.Body>
        </Card>
        </div> */}
        </div>
    );
};

export default SelectUser;