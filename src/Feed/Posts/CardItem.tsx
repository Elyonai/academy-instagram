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
  RecommendTwoTone,
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
import { Posts } from "../../data/posts";

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

export default function CardItem(props: Posts) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const { profile, profileImg, imgUrl, location, caption, likes, comments } =
    props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 580, minHeight: 700 }} elevation={8}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={profileImg}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" disableRipple={true}>
            <MoreHoriz />
          </IconButton>
        }
        title={profile}
        subheader={location}
      />
      <CardMedia
        component="img"
        height="70%"
        image={imgUrl}
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
                    alt={comments[0].profile}
                    src={comments[0].profileImg}
                    sx={{ height: 21, width: 21 }}
                  />
                  <Avatar
                    alt={comments[1].profile}
                    src={comments[1].profileImg}
                    sx={{ height: 21, width: 21 }}
                  />
                </AvatarGroup>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" sx={{ ml: 1 }}>
                  {likes} Likes
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
                    {profile}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    {caption}
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
                    {comments[0].profile}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    {comments[0].text}
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
                    {comments[1].profile}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" sx={{ fontSize: ".8rem" }}>
                    {comments[1].text}
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
