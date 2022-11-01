import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export const MovieFavorite = ({ movie, handleDelete }) => {
  return (
    <Card sx={{ display: "flex", position: "relavive", mb: "10px" }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", pt: "0" }}>
          <Typography component="div" variant="subtitle1" sx={{ mt: 0 }}>
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            sx={{ mt: 3 }}
          >
            Action & Adventure
          </Typography>
        </CardContent>
      </Box>
      <IconButton
        aria-label="settings"
        sx={{ right: "10px", position: "absolute" }}
        onClick={() => handleDelete(movie)}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
