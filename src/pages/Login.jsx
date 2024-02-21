import React, {useState} from "react"
import {MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBInput} from "mdb-react-ui-kit";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center">Login</h2>
                    <p className="mb-0 text-center mb-4">
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                    <MDBInput
                        wrapperClass='mb-4'
                        label='Email Address'
                        size='lg'
                        id='email'
                        type='email'
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <MDBInput
                        wrapperClass='mb-4'
                        label='Password'
                        size='lg'
                        id='password'
                        type='password'
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <MDBBtn
                        className='mb-4 w-100 gradient-custom-4'
                        size='lg'
                        onClick={handleSubmit}>
                        Register
                    </MDBBtn>

                    <small>
                        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                    </small>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default Login