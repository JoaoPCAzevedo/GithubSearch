/**
 * Imports
 */
import { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { gql, useLazyQuery } from "@apollo/client";
import { List as ReposList } from "../Components/Repos";
import { FavoritesContext } from "../Contexts/favorites";

/**
 * Types
 */
type Node = {
  id: string;
  name: string;
  description: string;
  url: string;
};

interface Data {
  nodes: Node[];
}

/**
 * GraphQL Queries
 */
const GITHUB_PUBLIC_REPOSITORIES_SEARCH = gql`
  query SearchPublicRepositoriesByID($queryString: [ID!]!) {
    nodes(ids: $queryString) {
      ... on Repository {
        id
        name
        description
        url
      }
    }
  }
`;

/**
 * Component
 */
export function Favorites() {
  const favorites = useContext(FavoritesContext);
  const [searchRepositories, { loading, data }] = useLazyQuery<Data>(
    GITHUB_PUBLIC_REPOSITORIES_SEARCH
  );

  useEffect(() => {
    if (favorites) {
      const favoritesIDS = Object.keys(favorites);
      searchRepositories({ variables: { queryString: favoritesIDS } });
    }
  }, [favorites]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} height={"500px"} overflow={"auto"}>
        <ReposList loading={loading} repos={data?.nodes} />
      </Grid>
    </Grid>
  );
}
