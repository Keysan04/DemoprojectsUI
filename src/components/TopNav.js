import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const TopNav = () => {
  const userJson = sessionStorage.getItem("user");
  const userObj = JSON.parse(userJson);
  console.log(userObj);
  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
  };
  return (
    <Navbar expand="md" className="bg-info">
      <Container fluid>
        <Navbar.Brand href="#home">Hello </Navbar.Brand>
        {userObj?.fName && <div>Welcome {userObj?.fName}</div>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userObj?._id ? (
              <Link onClick={handleOnLogout} to="/" className="nav-link">
                Log Out
              </Link>
            ) : (
              <>
                {" "}
                <Link to="/login" className="nav-link">
                  Sign In
                </Link>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
