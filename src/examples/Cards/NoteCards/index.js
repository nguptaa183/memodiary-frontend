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

import { useState } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import { navbarIconButton } from "examples/Navbars/DashboardNavbar/styles";

function NoteCard({ color, title, count, percentage, icon }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon onClick="">edit</Icon>} title="Edit" />
      <NotificationItem icon={<Icon onClick="">delete</Icon>} title="Delete" />
    </Menu>
  );
  return (
    <Card>
      <MDBox py={2} px={2}>
        <MDBox pb={1} display="flex" justifyContent="space-between">
          <MDBox textAlign="left" lineHeight={1.25}>
            <MDTypography variant="h6">{title}</MDTypography>
          </MDBox>
          <MDBox textAlign="right">
            <IconButton
              size="small"
              disableRipple
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleOpenMenu}
            >
              <Icon fontSize="inherit" color="inherit" sx={{ marginRight: "-0.9rem" }}>
                more_vert
              </Icon>
            </IconButton>
            {renderMenu()}
          </MDBox>
        </MDBox>
        <MDBox>
          <img
            height="auto"
            width="100%"
            src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
            alt="green iguana"
          />
        </MDBox>
        <MDTypography variant="button" fontWeight="light" color="text">
          {count}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of NoteCard
NoteCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the NoteCard
NoteCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default NoteCard;
