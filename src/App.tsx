import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral" position={"fixed"} zIndex={23} w={"100%"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" mt={100}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" mt={100}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
