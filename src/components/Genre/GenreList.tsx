import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} mb={4}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} py={2}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant={"link"}
                fontSize={"lg"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
