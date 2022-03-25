import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function Photo(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Row>
          <Col>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="600"
                image="https://images.pexels.com/photos/2538225/pexels-photo-2538225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Nature"
              />
            </Card>
          </Col>
          <Col>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                        D
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Diana Ayala"
                    subheader="March 22, 2022"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      It was the summer of love..a delicate daydream, and for a
                      couple of months It felt like we were 18, yeah
                    </Typography>
                  </CardContent>
                </Card>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Danna"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                Where it is?
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Sophia"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                That's my favorite beach
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="John"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                But you prefer the forest, right?
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Alex"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                I need some vacations!!!
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Dani"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                I would like to be there
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                  <ModeCommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <TelegramIcon />
                </IconButton>
                <IconButton aria-label="save">
                  <BookmarkAddedIcon />
                </IconButton>
              </CardActions>
            </Modal.Footer>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

export function Photography() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Click
      </Button>

      <Photo show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
