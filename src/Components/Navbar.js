/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [

    {
      text: "About",
      icon: <InfoIcon />,
      href:"#About"
    },
    {
      text: "Works",
      icon: <HomeRepairServiceIcon />,
      href:"#Works"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      href:"#Testimonials"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      href:"#Contact"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      href:"#ss"
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img loading="lazy" src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#About">About</a>
        <a href="#Works">Works</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Contact">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
<List>
  {menuOptions.map((item) => (
    <ListItem key={item.text} disablePadding>
      <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' , width:'100%'}}> 
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </a>
    </ListItem>
  ))}
</List>

          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
