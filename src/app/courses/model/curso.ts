import { Licao } from "./Licao";

export interface Curso {
  _id: string;
  name: string;
  category: string;
  licao?: Licao [];
}
