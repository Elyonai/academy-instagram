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
import { red } from "@mui/material/colors";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  MoreHoriz,
  Send,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import {
  AvatarGroup,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardItem() {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 550, minHeight: 700 }} elevation={8}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="https://res.cloudinary.com/joeutd/image/upload/v1648059998/insta-clone-academy/profile/profile2_ejxyor.jpg"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" disableRipple={true}>
            <MoreHoriz />
          </IconButton>
        }
        title="Mike Ramirez"
        subheader="Huntington Beach, California"
      />
      <CardMedia
        component="img"
        height="70%"
        image="https://res.cloudinary.com/joeutd/image/upload/v1647980740/insta-clone-academy/nature-2-tiny_zopwxj.jpg"
        alt="Paella dish"
      />
      {/*<CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>*/}
      <CardActions disableSpacing>
        <Grid container direction="column" alignItems="flex-start">
          <Grid container justifyContent="space-between">
            <Grid item>
              <IconButton aria-label="add to favorites" disableRipple={true}>
                <FavoriteBorderOutlined fontSize="medium" />
              </IconButton>
              <IconButton aria-label="comment" disableRipple={true}>
                <ChatBubbleOutline fontSize="medium" />
              </IconButton>
              <IconButton aria-label="comment" disableRipple={true}>
                <Send fontSize="medium" />
              </IconButton>
            </Grid>

            <Grid item>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <BookmarkBorder fontSize="medium" />
              </ExpandMore>
            </Grid>
          </Grid>
          <Grid item sx={{ ml: ".70em", mt: ".6em" }}>
            <Grid container alignItems="center">
              <Grid item>
                <AvatarGroup max={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://res.cloudinary.com/joeutd/image/upload/v1648059999/insta-clone-academy/profile/profile1_kamusu.jpg"
                    sx={{ height: 21, width: 21 }}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://res.cloudinary.com/joeutd/image/upload/v1648059998/insta-clone-academy/profile/profile5_lixplk.jpg"
                    sx={{ height: 21, width: 21 }}
                  />
                </AvatarGroup>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" sx={{ ml: 1 }}>
                  1,234,988 Likes
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ mt: ".6em" }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#161616", fontWeight: "bold" }}
                  >
                    Mike_Ramirez{" "}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    It was a great day
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                disableElevation={true}
                disableRipple={true}
                className="comment-button"
                size="small"
                variant="text"
                sx={{
                  ml: -0.67,
                  fontSize: ".8rem",
                  textTransform: "capitalize",
                  color: "#8e8e8e",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                View all comments
              </Button>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#161616", fontWeight: "bold" }}
                  >
                    David788{" "}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    Great view
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#161616", fontWeight: "bold" }}
                  >
                    marina98{" "}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    What a nice picture
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ fontSize: ".7em" }}>
                3 hours ago
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%", my: "1em" }}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid item sx={{ width: "100%" }} xs={12}>
            <TextField
              fullWidth={true}
              id="input-with-icon-textfield"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SentimentSatisfiedAlt />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="text"
                      disableRipple={true}
                      sx={{
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                    >
                      Post
                    </Button>
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
