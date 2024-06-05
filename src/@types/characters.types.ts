import {
  CharacterStatusEnum,
  CharacterSpeciesEnum,
  CharacterGenderEnum,
} from "../enums/characters.enums";

export type CharacterLocationType = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: CharacterStatusEnum;
  species: CharacterSpeciesEnum;
  type: string;
  gender: CharacterGenderEnum;
  origin: CharacterLocationType;
  location: CharacterLocationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
