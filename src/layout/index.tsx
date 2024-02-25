import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useWindowWidth from "../hook/useWindowWidth";
import ResponsiveNavbar from "./Navbar/components/ResponsiveNavbar";

function Layout() {
  const windowWidth = useWindowWidth();
  return (
    <Grid container>
      <Grid item xs={12}>
        {windowWidth < 900 ? <ResponsiveNavbar /> : <Navbar />}
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Layout;
