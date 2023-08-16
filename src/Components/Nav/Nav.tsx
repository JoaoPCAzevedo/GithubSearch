/**
 * Imports
 */
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import logo from "../../assets/logo.png";

/**
 * Styles
 */
const NavBar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  borderRadius: "4px 4px 0 0",
  padding: theme.spacing(1),
}));

const MenuItem = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.2rem",
  transition: "color 0.2s ease-in-out",
  color: theme.palette.grey[700],
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.grey[900],
  },
  "&.active": {
    color: theme.palette.grey[900],
    textDecoration: "underline",
  },
}));

const Logo = styled("img")(() => ({
  width: "100%",
}));

/**
 * Component
 */
export function Nav() {
  const location = useLocation();
  const menuItem = [
    { name: "Home", path: "/" },
    { name: "Favorites", path: "/favorites" },
  ];
  return (
    <NavBar>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
          <Logo src={logo} alt="Github logo" />
        </Grid>
        {menuItem.map((item) => (
          <Grid
            container
            item
            xs={4}
            justifyContent="center"
            alignItems="center"
            key={item.name}
          >
            <MenuItem
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Typography variant="h6">{item.name}</Typography>
            </MenuItem>
          </Grid>
        ))}
      </Grid>
    </NavBar>
  );
}
