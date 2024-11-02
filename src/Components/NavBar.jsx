// ./Components/Navbar.jsx
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/gdglko-logo.png';

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#about" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">About GDG</ListItem>
      </Typography>
      <Typography as="a" href="#upcoming-events" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Upcoming Events</ListItem>
      </Typography>
      <Typography as="a" href="#past-events" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Past Events</ListItem>
      </Typography>
      <Typography as="a" href="#organizer" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Organizer</ListItem>
      </Typography>
      <Typography as="a" href="#photos-videos" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Photos/Videos</ListItem>
      </Typography>
    </List>
  );
}

function SimpleNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="text-black mx-auto max-w-screen-xl px-4 py-2 shadow-md mt-8">
      <div className="flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="GDG Lucknow" className="h-10 w-auto" />
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="sm" variant="gradient">
            Join Us
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth variant="gradient">
            Join Us
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default SimpleNavbar;
