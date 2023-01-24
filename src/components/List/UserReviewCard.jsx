import {
  Box,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UserReviewCard({ movie }) {
  const navigate = useNavigate();
  return (
    <Paper elevation={3} sx={{ display: { xs: "block", md: "flex" }, gap: 1 }}>
      <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
        <img
          src={movie.imgSrc}
          alt={movie.title}
          width="100%"
          height="100%"
          style={{ objectFit: "scale-down" }}
        />
      </Box>

      <Box sx={{ flex: 3 }}>
        <CardHeader
          action={
            <IconButton onClick={() => navigate(`/movies/${movie.id}`)}>
              <FiExternalLink />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.createdAt}
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: "flex", mb: 1, flexWrap: "wrap" }}>
            <Typography variant="subtitle2">Rating:</Typography>
            <Rating value={movie.rating} readOnly sx={{ ml: "auto" }} />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {movie.content}
          </Typography>
        </CardContent>
      </Box>
    </Paper>
  );
}
