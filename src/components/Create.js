import { React, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './Details'
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
import './Create.css'


const Create = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name, b = age, c = email, d = contact;
        Details.push({ id: uniqueId, name: a, age: b, email: c, contact: d });
        record('/');
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');


    let record = useNavigate();

    return (
        <>
            <div className='container'>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Control type='text' placeholder='Enter name' required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formAge">
                        <Form.Control type='text' placeholder='Enter age' required onChange={(e) => setAge(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Control type='email' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formContact">
                        <Form.Control type='text' placeholder='Enter contact' required onChange={(e) => setContact(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default Create
