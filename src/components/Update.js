import { React, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './Details'
import { useNavigate } from 'react-router-dom'

const Update = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [id, setId] = useState('');

    let record = useNavigate();

    var index = Details.map(function (e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Details[index];

        a.name = name;
        a.age = age;
        a.email = email;
        a.contact = contact;

        record('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
        setContact(localStorage.getItem('contact'));
        setId(localStorage.getItem('id'));
    }, [])

    return (
        <div className='container'>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Control type='text' placeholder='Enter name' value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formAge">
                    <Form.Control type='text' placeholder='Enter age' value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Control type='email' placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formContact">
                    <Form.Control type='text' placeholder='Enter contact' value={contact} required onChange={(e) => setContact(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}

export default Update
