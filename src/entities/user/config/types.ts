export interface IUser {
  birth_year?: string;
  created?: string;
  edited?: string;
  eye_color?: string;
  films?: string[];
  gender?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  id: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  species?: string[];
  starships?: string[];
  url?: string;
  vehicles?: string[];
}

export type UserForTable = Pick<User, 'id' | 'name' | 'height' | 'mass' | 'hair_color'>
