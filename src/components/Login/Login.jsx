import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {singInWidthGoogle} =useFirebase();
    return (
        <div>
            <h3 className='w-25 mx-auto text-primary '> Please Login</h3>
            <div className='w-25 mx-auto  '>
                <button onClick={singInWidthGoogle}>Google</button>
                <button>Github</button>
                <button>Facebook</button>
                <h5 className='w-25 mx-auto ml-20'>Sing In </h5>
            </div>
            <Form className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-25 mx-auto' variant="primary" type="submit">
                    Login
                </Button>

            </Form>
        </div>
    );
};

export default Login;