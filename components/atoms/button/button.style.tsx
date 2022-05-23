import styled from "@emotion/styled";
import Buttom from "@mui/material/Button";
import { setStyleVariants } from "../../../styles/utils/setStyleVariants";

export const Button = styled(Buttom)((props: any) => {
  setStyleVariants("button", props);
  return `
  background-color: ${
    props.theme.button?.backgroundColor || props.theme.neutralPrimaryColor
  };
    borderColor: ${
      props.theme.button?.borderColor || props.theme.darkPrimaryColor
    };
`;
});
