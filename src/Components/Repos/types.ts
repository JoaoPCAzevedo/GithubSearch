export interface Repo {
  id: string;
  name: string;
  description: string;
  url: string;
}

type ID = string;

type Rating = number;

export type Favorite = {
  [key: ID]: Rating;
};
