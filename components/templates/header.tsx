import { Grid, Select, ThemeProvider } from "@mui/material";
import { Button } from "../atoms/button/button.style";
import { headerTheme } from "./theme";
import Image from "next/image";
import { StyledContainer } from "./styled";
const Header = ({ ...props }) => {
  const mode = "coffe";

  return (
    <ThemeProvider
      theme={(theme) =>
        props.disableCustomTheme ? theme : headerTheme(theme, mode)
      }
    >
      <StyledContainer
        container
        spacing={2}
        alignItems="center"
        style={{ margin: "15px" }}
      >
        <Grid item xs={2}>
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            }
            width="100"
            height="100"
            alt="it is pikachu image"
          ></Image>
        </Grid>
        <Grid item xs={4}>
          {props.content}
        </Grid>
        <Grid item xs={3}>
          <Button variante="none">Masters</Button>
          <Button variante="secondary">Tournaments</Button>
          <Button variante="primay">Badges</Button>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
};

export { Header };
