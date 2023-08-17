import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Details';
import './Home.css'

const Home = () => {

    let record = useNavigate();

    const handleDelete = (id) => {
        var index = Details.map(function (e) {
            return e.id;
        }).indexOf(id);

        Details.splice(index, 1);
        record('/');
    }

    const handleEdit = (id, name, age, email, contact) => {
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('contact', contact);
        localStorage.setItem('id', id);
    }

    return (
        <div className='container'>
            <table className='gradient-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (Details && Details.length > 0)
                            ?
                            Details.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>
                                            <Link to={`/update`}>
                                                <button className='action-button' onClick={() => handleEdit(item.id, item.name, item.age, item.email, item.contact)}>Update</button>
                                            </Link>
                                            &nbsp;
                                            <button className='action-button' onClick={() => handleDelete(item.id)}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data"
                    }
                </tbody>
            </table>
            <br />
            <Link className='d-grid gap-2' to={`/create`}>
                <button className='create-button'>Create</button>
            </Link>
        </div>
    )
}

export default Home
