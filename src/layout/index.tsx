import { Grid } from "@mui/material"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <Grid container>
        <Grid item xs={12}><Navbar/></Grid>
        <Grid item xs={12}><Outlet/></Grid>
        <Grid item xs={12}><Footer/></Grid>
    </Grid>
  )
}

export default Layout