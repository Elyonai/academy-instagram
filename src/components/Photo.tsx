import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Publication from "../types/publications";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function Photo(props: any) {
  const urlImage1 =
    "https://picsum.photos/1000";
  const urlImage2 =
    "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const urlImage3 =
    "https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const urlImage4 =
    "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const urlImage5 =
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const urlImage6 =
    "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  const Publication: Publication = {
    userName: "Diana Ayala",
    date: "March 28, 2022",
    descriptionPhoto:
      "Nice day",
    comment1: "Where it is?",
    comment2: "I love it!",
    comment3: "It's an amazing photo!",
    comment4: "See my dm",
    comment5: "wow!",
    likes: 231,
    comments: 134,
    share: 294,
    img1: urlImage1,
    img2: urlImage2,
    img3: urlImage3,
    img4: urlImage4,
    img5: urlImage5,
    img6: urlImage6,
  };

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
                image={Publication.img1}
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
                    title={Publication.userName}
                    subheader={Publication.date}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {Publication.descriptionPhoto}
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
                  src={Publication.img2}
                />
                {Publication.comment1}
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Sophia"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src={Publication.img3}
                />
                {Publication.comment2}
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="John"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src={Publication.img4}
                />
                {Publication.comment3}
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Alex"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src={Publication.img5}
                />
                {Publication.comment4}
              </Card>
              <Card sx={{ border: 0, boxShadow: 0, marginBottom: 2 }}>
                <Avatar
                  alt="Dani"
                  sx={{ maxWidth: 20, maxHeight: 20 }}
                  src={Publication.img6}
                />
                {Publication.comment5}
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

      <Button
        
        onClick={() => setModalShow(true)}
        variant="contained"
        color="secondary"
      >
        <img src="https://picsum.photos/1000" style={{ width: '150px', height: '150px' }}/>
      </Button>

      <Photo show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
