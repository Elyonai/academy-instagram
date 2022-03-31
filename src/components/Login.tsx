import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import FacebookIcon from "@mui/icons-material/Facebook";
import LogoInstagram from "../instagram-logo.jpg";
import LoginPhoto from "../loginphoneig.png";
import GooglePlay from "../googleplay.png";
import AppStore from "../appstore.png";
import { Logo } from "./Navbar/Styles";
import { blue } from "@mui/material/colors";

export function Login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <img src={LoginPhoto} alt="Instagram" />
            </Col>
            <Col>
              <Card style={{ width: "30rem", marginBottom: "10px" }}>
                <Form>
                  <Logo to="/">
                    <img
                      src={LogoInstagram}
                      alt="Instagram"
                      style={{ marginTop: "20px", width: "170px" }}
                    />
                  </Logo>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "10px",
                    }}
                  >
                    <Form.Control
                      type="email"
                      id="user"
                      placeholder="Teléfono, usuario o correo electrónico"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    style={{ marginLeft: "30px", marginRight: "30px" }}
                  >
                    <Form.Control
                      type="password"
                      id="pwd"
                      placeholder="Contraseña"
                    />
                  </Form.Group>
                  <Button
                    variant="info"
                    id="login"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
                <section className="user-output">
                  <ul className="user-list"></ul>
                </section>
                <script src="dist/main.js"></script>
                <Dropdown.Divider />
                <div>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    <FacebookIcon sx={{ color: blue[500] }} />
                    Iniciar sesión con Facebook
                  </a>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      fontSize: "12px",
                      color: "black",
                    }}
                  >
                    ¿Has olvidado la contraseña?
                  </a>
                </div>
              </Card>
              <Card style={{ width: "30rem" }}>
                <div style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      textDecoration: "none",
                      fontSize: "14px",
                      color: "black",
                      marginTop: "25px",
                    }}
                  >
                    ¿No tienes una cuenta?{" "}
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        fontSize: "14px",
                        color: "#4fa8fb",
                        fontWeight: "bold",
                      }}
                    >
                      Regístrate
                    </a>
                  </p>
                </div>
              </Card>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                Descarga la aplicación
              </p>
              <Container>
                <Row>
                  <Col>
                    <img
                      src={AppStore}
                      alt="AppStore"
                      style={{ maxWidth: "150px" }}
                    />
                  </Col>
                  <Col>
                    <img
                      src={GooglePlay}
                      alt="GooglePlay"
                      style={{ maxWidth: "150px" }}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
