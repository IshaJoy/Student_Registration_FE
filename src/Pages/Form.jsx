import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: '', lastName: '', address: '', email: '', gender: '', mobile: '', password: '', date: '', course: ''
    })
    console.log(userData);

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(userData);
        const { firstName, lastName, address, email, gender, mobile, password, date, course } = userData
        if (!firstName || !lastName || !address || !email || !gender || !mobile || !password || !date || !course) {
            toast.warning('Please fill the form completely')
        } else {
            try {
                const result = await registerAPI(userData)
                console.log(result);
                if (result.status == 200) {
                    setUserData({ firstName: '', lastName: '', address: '', email: '', gender: '', mobile: '', password: '', date: '', course: '' })
                    setTimeout(() => {
                        navigate('/details')
                    }, 2000);

                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }



        }
    }


    

    return (
        <div className="container" >
            <h2 className="mt-4">Apply as a Student</h2>
           
            <div className="mt-4 row">
                <div className='col-lg-6'>
                <Form.Group controlId="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"  placeholder='Enter your first name' onChange={e => setUserData({ ...userData, firstName: e.target.value })} value={userData.firstName} className='mb-4'  />
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text"  placeholder='Enter your last name' onChange={e => setUserData({ ...userData, lastName: e.target.value })} value={userData.lastName} className='mb-4'  />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text"  placeholder='Enter your address' onChange={e => setUserData({ ...userData, address: e.target.value })} value={userData.address} className='mb-4'  />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='Enter your email' onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} className='mb-4'/>
                </Form.Group>

                <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" placeholder='Select Gender' onChange={e => setUserData({ ...userData, gender: e.target.value })} value={userData.gender}  >
                        <option>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>
                </div>


                <div className='col-lg-6'>
                <Form.Group controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="tel" placeholder='Enter your mobile number' onChange={e => setUserData({ ...userData, mobile: e.target.value })} value={userData.mobile} className='mb-4'  />
                </Form.Group>

                <Form.Group controlId="mobile">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Enter your password' onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} className='mb-4'  />
                </Form.Group>

                <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder='dd-mm-yyyy' onChange={e => setUserData({ ...userData, date: e.target.value })} value={userData.date} className='mb-4' />
                </Form.Group>

                <Form.Group controlId="course">
                    <Form.Label>Course</Form.Label>
                    <Form.Control as="select"  placeholder='Select Course' onChange={e => setUserData({ ...userData, course: e.target.value })} value={userData.course} className='mb-5'  >
                        <option>Select Course</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Humanities">Humanities</option>
                    </Form.Control>
                </Form.Group>

                <Button onClick={handleRegister} variant="primary" type="button"  className="mt-2 w-25 rounded">
                    Register
                </Button>
                
                </div>
                
            </div>

            <ToastContainer />
        </div>
    );
}

export default RegistrationForm;
