/**
 * Imports
 */
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { gql, useLazyQuery } from "@apollo/client";
import { List as ReposList } from "../Components/Repos";

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
  search: {
    nodes: Node[];
  };
}

/**
 * GraphQL Queries
 */
const GITHUB_PUBLIC_REPOSITORIES_SEARCH = gql`
  query SearchPublicRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
`;

/**
 * Component
 */
export function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchRepositories, { loading, data }] = useLazyQuery<Data>(
    GITHUB_PUBLIC_REPOSITORIES_SEARCH
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      searchRepositories({ variables: { queryString: searchQuery } });
    }, 500); // Adjust debounce time as needed, 0.5s

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <TextField
          label="Search Public Github Repositories"
          variant="outlined"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} height={"500px"} overflow={"auto"}>
        <ReposList loading={loading} repos={data?.search.nodes} />
      </Grid>
    </Grid>
  );
}
