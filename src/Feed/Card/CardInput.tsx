import React, { FC } from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { SentimentSatisfiedAlt } from "@mui/icons-material";

export interface InputProps {
  /**
   * Is it an a fullWidth input
   */
  fullWidth?: boolean;
  /**
   * How large should the buttons be?
   */
  size?: "small" | "medium";
}

const CardInput = (props: InputProps) => {
  const [newComment, setNewComment] = React.useState("");
  const { fullWidth, size } = props;

  const addComment = () => {
    // console.log(newComment);
    setNewComment("");
  };

  return (
    <Grid item sx={{ width: fullWidth === false ? "20%" : "100%" }} xs={12}>
      <TextField
        value={newComment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewComment(e.target.value)
        }
        fullWidth={fullWidth ? fullWidth : true}
        size={size ? size : undefined}
        id="input-with-icon-textfield"
        placeholder="Say something nice..."
        InputProps={{
          // style: { fontSize: 14 },
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SentimentSatisfiedAlt fontSize={size ? size : undefined} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="text"
                size={size ? size : undefined}
                onClick={addComment}
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
  );
};

export default CardInput;
