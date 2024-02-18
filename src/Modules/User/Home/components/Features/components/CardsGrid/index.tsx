import { Grid } from "@mui/material";
import Cards from "../Cards";
import ImageOne from "../../../../../../../assets/Home/Features/image1.svg";
import ImageTwo from "../../../../../../../assets/Home/Features/image2.svg";
import ImageThree from "../../../../../../../assets/Home/Features/image3.svg";
import ImageFour from "../../../../../../../assets/Home/Features/image4.svg";
import ImageFive from "../../../../../../../assets/Home/Features/image5.svg";
import ImageSix from "../../../../../../../assets/Home/Features/image6.svg";
import ImageSeven from "../../../../../../../assets/Home/Features/image7.svg";
import ImageEight from "../../../../../../../assets/Home/Features/image8.svg";
function CardsGrid() {
  const ArrayData = [
    {
      img: ImageOne,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageTwo,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageThree,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageFour,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageFive,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageSix,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageSeven,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
    {
      img: ImageEight,
      title: "Prior Authorization Services",
      para: "Bright Health Care Solutions provide prior authorization services as our goal is to get ...",
    },
  ];
  return (
    <Grid container>
      {ArrayData.map((e, i) => (
        <Grid item sx={{ paddingInline: 1, paddingBlock: 1 }} key={i} xs={3}>
          <Cards CardsData={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;
