import { Grid } from "@mui/material";
import Satyamstudio from "./Satyamstudio";
import SimpleLinks from "./SimpleLinks";
import NewsLetter from "./NewsLetter";

function Upper() {
  const DataArrayOne: string[] = [
    "Prior Authorization Services",
    "Medical Billing Services",
    "Medical Coding Services",
    "AR Recovery Services",
    "Provider Enrollment Services",
  ];
  const DataArrayTwo: string[] = [
    "Home",
    "About",
    "Services",
    "Specialties",
    "Request  Demo",
    "Pricing",
    "Contact",
  ];
  return (
    <Grid container rowGap={10}>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <Satyamstudio />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <SimpleLinks
          title={"Services"}
          StringArray={DataArrayOne}
        />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <SimpleLinks title="Company" StringArray={DataArrayTwo} />
      </Grid>
      <Grid item sx={{ paddingInline: 1 }} xs={12} sm={6} lg={3}>
        <NewsLetter />
      </Grid>
    </Grid>
  );
}

export default Upper;
