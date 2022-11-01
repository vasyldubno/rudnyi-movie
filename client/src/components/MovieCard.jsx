import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
// mui icons
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export const MovieCard = ({ movie, onClick, isSelected }) => {
  return (
    <Card
      sx={{
        maxWidth: 220,
        boxShadow: "none",
        position: "relative",
      }}
    >
      {isSelected && (
        <IconButton
          aria-label="settings"
          sx={{
            position: "absolute",
            zIndex: "5",
            right: "0",
          }}
          onClick={() => onClick(movie)}
        >
          <BookmarksIcon sx={{ color: "gold" }} />
        </IconButton>
      )}
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          image={movie.posterPath}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.releaseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
