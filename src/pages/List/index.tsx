import { useEffect, useState } from "react";
import { CharacterType } from "../../@types/characters.types";
import { getCharacters } from "../../services/rickAndMortyApi";
import { CharacterCard } from "../../components/CharacterCard";
import { Loading } from "../../components/Loading";

export const List = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    populateCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const populateCharacters = async () => {
    setLoading(true);

    const response = await getCharacters(currentPage);
    if (!response) return;

    setCharacters(response.results);
    setTotalPages(response.info.pages);
    setLoading(false);
  };

  const nextPage = () => {
    if (currentPage === totalPages - 1) return;

    setCurrentPage(currentPage + 1);
  };

  const backPage = () => {
    if (currentPage === 0) return;

    setCurrentPage(currentPage - 1);
  };

  if (loading) return <Loading />;

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard character={character} />
      ))}
      <button onClick={backPage}>Back</button>
      <div>
        {currentPage + 1}/{totalPages}
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};
