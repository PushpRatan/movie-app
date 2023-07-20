import { React, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config/config";
import "./ContentModal.css";

const style = {
  "box-sizing": "border-box",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "#292626",
  color: "wheat",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const movieData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=60128e678dbba711c28e6e384e625e89&language=en-US`
    );
    setContent(data);
  };

  useEffect(() => {
    if (open) {
      console.log(content);
      movieData();
    }
  }, [open]);

  return (
    <>
      <div onClick={handleOpen} className="card">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div className="ContentModal">
                <img
                  className="ContentModal_portrait"
                  alt={content.name || content.title}
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  className="ContentModal_landscape"
                  alt={content.name || content.title}
                />
                <div className="ContentModal_about">
                  <span className="ContentModal_title">
                    {content.name || content.title + " "}(
                    {" " + (content.release_date || "_____").substring(0, 4)})
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal_description">
                    {content.overview || "No details available"}
                  </span>
                  <div></div>
                  <Button variant="contained">Add to Favourites</Button>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
