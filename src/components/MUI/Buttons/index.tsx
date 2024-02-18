import {
  Button,
  styled,
  Theme,
  SxProps,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  backgroundBtn?: string;
  colorBtn?: string;
  sx?: SxProps<Theme>;
}
interface StyledButtonProps extends MuiButtonProps {
  colorBtn?: string;
  backgroundBtn?: string;
}
const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, colorBtn, backgroundBtn }) => ({
    background: backgroundBtn ? backgroundBtn : theme.palette.custom.main,
    color: colorBtn ? colorBtn : "white",
    "&:hover": {
      background: backgroundBtn ? backgroundBtn : theme.palette.custom.main,
      color: colorBtn ? colorBtn : "white",
    },
  })
);
function Buttons({ children, colorBtn, backgroundBtn, ...rest }: ButtonProps) {
  return (
    <StyledButton
      variant={"contained"}
      colorBtn={colorBtn}
      backgroundBtn={backgroundBtn}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Buttons;