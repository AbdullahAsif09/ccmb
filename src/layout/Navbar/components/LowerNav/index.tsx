import { Grid, Stack, Typography, styled } from "@mui/material";
import LogoSvg from "../../../../assets/Logo.svg";
import Buttons from "../../../../components/MUI/Buttons";
import { useNavigate } from "react-router";
const GridStyled = styled(Grid)(({}) => ({}));
function LowerNav() {
  const navigate = useNavigate();
  const ArrayData = [
    {
      name: "Home",
      // icon: <Home />,
      url: "/",
    },
    // {
    //   name: "About",
    //   icon: <Info />,
    //   url: "/about",
    // },
    {
      name: "Services",
      // icon: <MedicalServices />,
      url: "/services",
    },
    {
      name: "Specialities",
      // icon: <Star />,
      url: "/specialities",
    },
    {
      name: "Request Demo",
      // icon: <BubbleChart />,
      url: "/demo",
    },
    {
      name: "Pricing",
      // icon: <PriceChange />,
      url: "/pricing",
    },
    {
      name: "Contact Us",
      // icon: <Mail />,
      url: "/contact",
    },
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
          {ArrayData?.map((e, i) => (
            <Typography
              onClick={() => navigate(e?.url)}
              sx={{ cursor: "pointer" }}
              key={i}
              fontWeight={600}
              variant={"body2"}
            >
              {e?.name}
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
