/**
 * Imports
 */
import { useState, useContext } from "react";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import type { Repo, Favorite } from "./types";
import {
  FavoritesContext,
  FavoritesDispatchContext,
} from "../../Contexts/favorites";

/**
 * Types
 */
interface ReposProps extends Repo {}

/**
 * Component
 */
export function Repos(props: ReposProps): JSX.Element {
  const favorites = useContext(FavoritesContext);
  const setFavorites = useContext(FavoritesDispatchContext);

  const { id, name, description, url } = props;

  const handleFavorites = (id: string, rating: number) => {
    if (!setFavorites) return;
    // Remove from favorites
    if (rating === 0) {
      setFavorites(() => {
        const newFavorites = { ...favorites };
        delete newFavorites[id];
        return newFavorites;
      });
    } else {
      // Update favorites
      if (favorites?.[id]) {
        setFavorites(() => {
          const newFavorites = { ...favorites };
          newFavorites[id] = rating;
          return newFavorites;
        });
      }
      // Add to favorites
      else {
        setFavorites(() => {
          const newFavorites = { ...favorites };
          newFavorites[id] = rating;
          return newFavorites;
        });
      }
    }
  };

  return (
    <ListItem>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={8}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={name} secondary={description} />
          </Link>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Rating
            name={`rating-${name}`}
            value={favorites?.[id] || 0}
            onChange={(e, newValue) => {
              handleFavorites(id, newValue || 0);
            }}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
}
