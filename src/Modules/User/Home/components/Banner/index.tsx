import { Grid, Stack, Typography, styled } from "@mui/material";
import ImageBg from "../../../../../assets/Banner.png";
import ImageCircle from "../../../../../assets/BannerCircle.svg";
import ImageGirl from "../../../../../assets/Banner2.png";
import DentistSvg from "../../../../../assets/Home/Banner/professionalDentists.svg";
import TopLevelSvg from "../../../../../assets/Home/Banner/topLevel.svg";
import ServicesSvg from "../../../../../assets/Home/Banner/professionalServices.svg";
import Buttons from "../../../../../components/MUI/Buttons";
interface ArrayData {
  title: string;
  icon: string;
}
const GridStyled = styled(Grid)(({}) => ({
  minHeight: "500px",
  background: `url(${ImageBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
}));
function Banner() {
  const ArrayData: ArrayData[] = [
    {
      title: "Professional Dentist",
      icon: DentistSvg,
    },
    {
      title: "Top Level Doctor",
      icon: TopLevelSvg,
    },
    {
      title: "Professional Services",
      icon: ServicesSvg,
    },
  ];
  return (
    <GridStyled
      container
      position={"relative"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <img
        src={ImageCircle}
        style={{
          position: "absolute",
          height: "110%",
          top: "0%",
        }}
        alt=""
      />
      <img
        src={ImageGirl}
        style={{
          position: "absolute",
          height: "85%",
          bottom: "0%",
        }}
        alt=""
      />
      <Grid
        item
        sx={{ height: "100%", zIndex: "3" }}
        xs={6}
      >
        <Stack direction={"row"}>
          <Stack direction={"column"} alignItems={"flex-start"} gap={3}>
            <Typography variant={"h3"} color={"primary.main"}>
              Welcome To
            </Typography>
            <Typography variant={"h2"}>Bright Medical</Typography>
            <Typography sx={{ mt: -4 }} variant={"h2"}>
              Billing
            </Typography>
            <Typography variant={"caption"} width={"40%"}>
              We Redefine the status of the medical billing industry by offering
              seamless Revenue Cycle Management Services, Let’s get your net
              patient revenue increase by leaving billing to the experts.
            </Typography>
            <Buttons>Contact Us</Buttons>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="center"
        sx={{ height: "100%", zIndex: "3" }}
        xs={5}
      >
        <Stack direction={"column"} paddingLeft={12} gap={2}>
          {ArrayData.map((e, i) => (
            <Stack
              key={i}
              direction={"row"}
              ml={i === 1 ? 4 : i === 2 ? -1 : 0}
              alignItems={"center"}
              gap={1}
            >
              <img width={"40px"} src={e.icon} alt="" />
              <Typography variant={"body1"} fontWeight={600}>
                {e.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </GridStyled>
  );
}

export default Banner;
