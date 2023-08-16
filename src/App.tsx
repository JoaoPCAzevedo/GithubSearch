/**
 * Imports
 */
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Nav } from "./Components/Nav";
import { Outlet } from "react-router-dom";
import { FavoritesProvider } from "./Contexts/favorites";

/**
 * Styles
 */
const Content = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
}));

/*
 * Component
 */
const GithubPublicRepositoriesSearch = () => {
  return (
    <Container>
      <Paper elevation={4}>
        <Nav />
        <Content>
          <FavoritesProvider>
            <Outlet />
          </FavoritesProvider>
        </Content>
      </Paper>
    </Container>
  );
};

export default GithubPublicRepositoriesSearch;
