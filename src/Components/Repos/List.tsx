/**
 * Imports
 */
import ListM from "@mui/material/List";
import { Loading } from "./Loading";
import Typography from "@mui/material/Typography";
import { Repos } from "./Repos";
import type { Repo } from "./types";

/**
 * Types
 */
interface ListProps {
  loading: boolean;
  repos?: Repo[];
}

/**
 * Component
 */
export function List(props: ListProps): JSX.Element {
  const { loading, repos } = props;

  if (loading) {
    return (
      <>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </>
    );
  } else if (repos) {
    return (
      <ListM>
        {repos.map((repo) => (
          <Repos
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.url}
          />
        ))}
      </ListM>
    );
  }
  return <Typography variant="h6">Nothing to show...</Typography>;
}
