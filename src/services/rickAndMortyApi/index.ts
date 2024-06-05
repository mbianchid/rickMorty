import axios from "axios";
import { ApiPayload } from "./types";
import { CharacterType } from "../../@types/characters.types";

const URL = "https://rickandmortyapi.com/api";
const ENDPOINTS = {
  CHARACTERS: "/character",
};

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: { ContentType: "application/json" },
});

export const getCharacters = async () => {
  try {
    const response = await instance.get<ApiPayload<CharacterType>>(
      ENDPOINTS.CHARACTERS
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
