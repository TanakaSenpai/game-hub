import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIcons from "../Platform/PlatformIcons";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImgUrl from "../../services/imgUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} mb={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
