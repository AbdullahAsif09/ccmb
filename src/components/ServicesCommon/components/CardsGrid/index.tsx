import { Grid } from "@mui/material";
import Cards from "../Cards";
import MainOne from "../../../../assets/Home/Services/main1.png";
import MainSvgOne from "../../../../assets/Home/Services/mainSvg1.svg";
import MainTwo from "../../../../assets/Home/Services/main2.png";
import MainSvgTwo from "../../../../assets/Home/Services/mainSvg2.svg";
import MainThree from "../../../../assets/Home/Services/main3.png";
import MainSvgThree from "../../../../assets/Home/Services/mainSvg3.svg";
import MainFour from "../../../../assets/Home/Services/main4.png";
import MainSvgFour from "../../../../assets/Home/Services/mainSvg4.svg";
function CardsGrid() {
  const ArrayData = [
    {
      imgOne: MainOne,
      imgTwo: MainSvgOne,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      imgOne: MainTwo,
      imgTwo: MainSvgTwo,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      imgOne: MainThree,
      imgTwo: MainSvgThree,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      imgOne: MainFour,
      imgTwo: MainSvgFour,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
  ];
  return (
    <Grid container justifyContent={"center"} rowGap={2}>
      {ArrayData.map((e, i) => (
        <Grid item sx={{ paddingInline: 1 }} key={i} xs={12} sm={6} lg={3}>
          <Cards CardsData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
