import { useEffect, useState } from "react";
import { CharacterType } from "../../@types/characters.types";
import { getCharacters } from "../../services/rickAndMortyApi";

export const List = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!characters.length) {
      populateCharacters();
    }
  }, []);

  const populateCharacters = async () => {
    setLoading(true);

    const response = await getCharacters();
    if (!response) return;

    setCharacters(response.results);
    setLoading(false);
  };

  const CharacterCard = (props: { character: CharacterType }) => {
    const { character } = props;
    return <div>{character.name}</div>;
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};
