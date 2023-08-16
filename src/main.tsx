/**
 * Imports
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home.tsx";
import { Favorites } from "./Pages/Favorites.tsx";
import "./styles.css";

/**
 * Apollo Client
 */
const client = new ApolloClient({
  uri: "https://api.github.com/graphql", // GitHub GraphQL API endpoint
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

/**
 * React Router
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

/**
 * App
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
