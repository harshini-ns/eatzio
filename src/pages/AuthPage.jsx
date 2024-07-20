import { Col, Image, Row, Button, Modal, Form, Container } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react'

import useLocalStorage from "use-local-storage";
import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../components/AuthProvider';

export default function AuthPage() {
    const loginImage = 'https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/12/10-1702348769.jpg'
    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("SignUp");
    const handleShowLogin = () => setModalShow("Login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    //const url = 'https://58313eb4-d1a4-4353-8169-7e35efc691e5-00-14mnp0a3bw1g1.riker.replit.dev'

    const navigate = useNavigate();

    //
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
        if (currentUser) navigate("/profile");

    }, [currentUser, navigate])
    //



    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, username, password);
            console.log(res.user);
            console.log("signed up successfully !! ")
            alert(("signed up successfully !! "))
        } catch (error) {
            console.error(error);
            alert("wrong credentials")
        }
    };
    //
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            console.log(" login successfully ");
            alert("login is successfull ! ")
        } catch (error) {
            console.error("error in login function", error)
            alert("wrong credentials");
        }
    }

    const handleClose = () => setModalShow(null);

    //

    return (


        <Row>
            <Col sm={6}>
                <Image src={loginImage} fluid />
            </Col>

            <Col sm={6} className="p-4" >

                <i
                    className="bi bi-egg-fried"
                    style={{ fontSize: 50, color: "pink" }}
                ></i>


                <p className="mt-5" style={{ fontSize: 64 }}>
                    Eatzio
                </p>
                <h2 className="my-5" style={{ fontSize: 31 }}>
                    its time to upload your signature dishes to world!
                </h2>

                <Col sm={5} className="d-grid gap-2">
                    <Button className="rounded-pill" variant="outline-dark">
                        <i className="bi bi-google"></i> Sign up with Google
                    </Button>
                    <Button className="rounded-pill" variant="outline-dark">
                        <i className="bi bi-apple"></i> Sign up with Apple
                    </Button>
                    <p style={{ textAlign: "center" }}>or</p>
                    <Button className="rounded-pill" onClick={handleShowSignUp}>
                        Create an account
                    </Button>
                    <p style={{ fontSize: "12px" }}>
                        By signing up, you agree to the Terms of Service and Privacy Policy,
                        including Cookie Use.
                    </p>

                    <p className="mt-5" style={{ fontWeight: "bold" }}>
                        Already have an account?
                    </p>
                    <Button className='rounded-pill' variant='outline-primary' onClick={handleShowLogin}> Sign In   </Button>
                </Col>




                <Modal show={modalShow !== null} onHide={handleClose} animation={false} centered>
                    <Modal.Body>
                        <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                            {modalShow === "SignUp"
                                ? "Create your account"
                                : "log in to your account"}
                        </h2>
                        <Form
                            className="d-grid gap-2 px-5"
                            onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                        >

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <p style={{ fontSize: "12px" }}>
                                By signing up, you agree to the Terms of Service and Privacy
                                Policy, including Cookie Use. SigmaTweets may use your contact
                                information, including your email address and phone number for
                                purposes outlined in our Privacy Policy, like keeping your
                                account secure and personalising our services, including ads.
                                Learn more. Others will be able to find you by email or phone
                                number, when provided, unless you choose otherwise here.
                            </p>

                            <Button className="rounded-pill" type="submit"> {modalShow === "SignUp" ? "Sign Up" : "Log in"} </Button>

                        </Form>

                    </Modal.Body>

                </Modal>


            </Col>

        </Row>


    );
}
