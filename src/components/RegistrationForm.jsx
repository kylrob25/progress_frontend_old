import {Button, Form} from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
import {useState} from "react";

const RegistrationForm = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [recaptchaValue, setRecaptchaValue] = useState()

    const handleSubmit = (e) => {

    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <ReCAPTCHA sitekey="6Le9bncpAAAAALuqa1X7f6v2GlzXsnzTT4TSpmfE" onChange={(value) => setRecaptchaValue(value)}/>

            <br/>

            <Button variant="primary" type="submit" /* disabled={!recaptchaValue} */>Submit</Button>
        </Form>
    )
}

export default RegistrationForm
