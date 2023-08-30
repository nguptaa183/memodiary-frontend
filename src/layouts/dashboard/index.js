/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import NoteCard from "examples/Cards/NoteCards";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDTypography from "components/MDTypography";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={2} px={2}>
        <MDTypography variant="h3">
          Notes
          <span>
            <IconButton
              size="medium"
              // color="inherit"
              // sx={navbarIconButton}
              // onClick={handleDarkMode}
            >
              <Icon color="info">post_add</Icon>
            </IconButton>
          </span>
        </MDTypography>
      </MDBox>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              {/* <Paper elevation={3} /> */}
              <NoteCard
                color="dark"
                icon="weekend"
                title="Food"
                // count={281}
                count="Est aliqua et consectetur commodo."
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <NoteCard
                icon="leaderboard"
                title="Cloth"
                count="Esse consequat incididunt ex commodo consequat ea sint consectetur adipisicing labore proident fugiat voluptate."
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <NoteCard
                color="success"
                icon="store"
                title="Book"
                count="Qui sit enim labore duis commodo amet Lorem enim officia elit."
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <NoteCard
                color="primary"
                icon="person_add"
                title="Table"
                count="Cillum qui proident minim incididunt esse."
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
