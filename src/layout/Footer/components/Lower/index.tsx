import { Call, LocationCity, Mail } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type ContactInfo = {
  title: string;
  icon: ReactNode;
};
function Lower() {
  const DataArray: ContactInfo[] = [
    {
      title: "8819 Ohio St. South Gate, CA 90280",
      icon: <LocationCity />,
    },
    {
      title: "ourstudio@email.com",
      icon: <Mail />,
    },
    {
      title: "+1 30000000000",
      icon: <Call />,
    },
  ];
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Typography variant="body2">Copyright Satyam Studio</Typography>
      {DataArray.map((e, i) => (
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          {e.icon}
          <Typography sx={{ mt: 0.5 }} key={i} variant="body2">
            {e.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default Lower;
