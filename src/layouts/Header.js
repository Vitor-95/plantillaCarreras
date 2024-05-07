import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
} from "reactstrap";
import Logo from "../assets/images/logos/logoPrincipal.jpeg"
import { ReactComponent as LogoWhite } from "../assets/images/logos/logoPrincipal.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);


  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
        <img
              src={Logo}
              alt="profile"
              //className="{width: 200px; height: 100px; border-radius: 100px;}"
              border-radius= "1"
              width="100"
        ></img>
        </div>
        <NavbarBrand href="/">
          <LogoWhite className=" d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      
    </Navbar>
  );
};

export default Header;
