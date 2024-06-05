import axios from "axios";
import { ApiPayload } from "./types";
import { CharacterType } from "../../@types/characters.types";

const URL = "https://rickandmortyapi.com/api";
const ENDPOINTS = {
  CHARACTERS: "/character",
  IMAGE: (id: number) => `/character/avatar/${id}.jpeg`,
};

const PARAMETERS = {
  PAGE: (index: number) => `page=${index + 1}`,
};

const getParameters = (endpoint: string, parameters?: string[]) => {
  if (!parameters?.length) return endpoint;

  return `${endpoint}?${
    parameters.length > 1 ? parameters.join("&") : parameters[0]
  }`;
};

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: { ContentType: "application/json" },
});

export const getCharacters = async (page: number) => {
  const endpoint = getParameters(ENDPOINTS.CHARACTERS, [PARAMETERS.PAGE(page)]);
  console.log(endpoint);

  try {
    const response = await instance.get<ApiPayload<CharacterType>>(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getImage = async (id: number) => {
  return null;
};
