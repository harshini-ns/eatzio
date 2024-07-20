import { useContext, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { AuthContext } from "../components/AuthProvider";

export default function ProfilePage() {
    const auth = getAuth();
    const navigate = useNavigate();
    const currentUser = useContext(AuthContext);

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log("User signed out");
            navigate("/login");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <i className="bi bi-egg-fried" style={{ fontSize: 30, color: "red" }}></i>
                        <span className="mt-5" style={{ fontSize: 64 }}>Eatzio</span>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="primary" onClick={handleLogout}>
                            <i className="bi bi-box-arrow-left" style={{ fontSize: 50, color: "black" }}></i>
                            Sign Out
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-3">
                <h2>Welcome to Your Profile!</h2>
            </Container>
        </>
    );
}
