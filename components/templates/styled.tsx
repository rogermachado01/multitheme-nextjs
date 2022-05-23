import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledContainer = styled(Grid)`
  background-color: ${(props: any) =>
    props.theme.headerContainer?.backgroundColor ||
    props.theme.neutralSecondaryColor};
`;

export { StyledContainer };
