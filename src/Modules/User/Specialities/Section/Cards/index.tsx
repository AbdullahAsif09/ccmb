import { Card, Stack, Typography } from "@mui/material";
import VectorOne from "../../../../../assets/Specialities/Vector.svg";
function Cards() {
  return (
    <Card sx={{ m: 1, p: 2 }} elevation={4}>
      <Stack direction={"column"} gap={1}>
        <img src={VectorOne} style={{ width: "30px" }} alt="" />
        <Typography variant={"h5"} fontWeight={600}>
          Service Name
        </Typography>
        <Typography variant={"body2"} fontWeight={500}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed.
        </Typography>
      </Stack>
    </Card>
  );
}

export default Cards;
