import { Grid, Stack, Typography, styled } from "@mui/material";
import LogoSvg from "../../../../assets/Logo.svg";
import Buttons from "../../../../components/MUI/Buttons";
const GridStyled = styled(Grid)(({}) => ({}));
function LowerNav() {
  const ArrayData = [
    "Home",
    "About",
    "Services",
    "Specialties",
    "Request Demo",
    "Pricing",
    "Contact",
  ];
  return (
    <GridStyled container>
      <Grid item xs={2}>
        <img src={LogoSvg} height={"60px"} alt="" />
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={8}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          {ArrayData.map((e, i) => (
            <Typography
              sx={{ cursor: "pointer" }}
              key={i}
              fontWeight={600}
              variant={"body2"}
            >
              {e}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        xs={2}
      >
        <Buttons>Make a Call</Buttons>
      </Grid>
    </GridStyled>
  );
}

export default LowerNav;
