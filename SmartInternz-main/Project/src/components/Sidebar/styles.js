import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "70%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
  },
}));
