/**
 * Imports
 */
import React, { createContext, useState } from "react";
import { Favorite } from "../Components/Repos/types";

/**
 * Contexts
 */
const FavoritesContext = createContext(undefined as Favorite | undefined);
const FavoritesDispatchContext = createContext(
  undefined as
    | React.Dispatch<React.SetStateAction<Favorite | undefined>>
    | undefined
);

/**
 * Types
 */
interface Props {
  children: React.ReactNode;
}

/**
 * Component
 */
function FavoritesProvider(props: Props): JSX.Element {
  const { children } = props;
  const [favorites, setFavorites] = useState<Favorite>();

  return (
    <FavoritesContext.Provider value={favorites}>
      <FavoritesDispatchContext.Provider value={setFavorites}>
        {children}
      </FavoritesDispatchContext.Provider>
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext, FavoritesDispatchContext };
