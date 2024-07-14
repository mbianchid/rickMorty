import { CharacterCardProps } from "./types";

export const CharacterCard: React.FC<CharacterCardProps> = (
  props: CharacterCardProps
) => {
  const { character } = props;
  return (
    <div>
      {character.id}-{character.name}-{character.image}
    </div>
  );
};
