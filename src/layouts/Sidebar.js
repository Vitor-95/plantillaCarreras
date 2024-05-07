import {
  Button, Nav, NavItem,

} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/logos/logoPrincipal.jpeg";
import probg from "../assets/images/logos/Afuera.png";
import { useState } from "react";
import "./styleSidebar.css"

const navigation = [
  {
    title: "Quienes Somos",
    opcion: ["MISION Y VISION", "ORGANIGRAMA", "ESTATUTOS"],
    href: ["mision", "organigrama", "estatutos"],
    icon: "bi bi-speedometer2",
  },
  {
    title: "PLAN DE ESTUDIOS",
    opcion: ["MALLA CURRICULAR"],
    href: ["mallacurricular"],
    icon: "bi bi-bell",
  },  
  {
    title: "CALENDARIO ACADEMICO",
    opcion: ["HORARIOS", "FECHAS DE EXAMEN", "OTRAS ACTIVIDADES"],
    href: ["horarios", "fechasExamen", "actividades"],
    icon: "bi bi-patch-check",
  },
  {
    title: "ADMISION",
    opcion: ["MODALIDADES DE ADMISION", "REQUISITOS DE ADMISION", "MATRICULA"],
    href: ["modalidadAdmision", "requisitoAdmision", "matricula"],
    icon: "bi bi-hdd-stack",
  },
  {
    title: "TITULACION",
    opcion: ["MODALIDADES DE TITUALACION", "REQUISITOS"],
    href: ["modalidadTitulacion", "requisitoTitulacion"],
    icon: "bi bi-card-text",
  },
  {
    title: "BECAS",
    opcion: ["BECA AUXILIATURA REQUISITOS Y REGLAMENTOS"," BECA COMEDOR REQUISITOS Y REGLAMENTO","INTERCAMBIO ESTUDIANTIL"],
    href: ["becaAuxiliatura","becaComedor","becaIntercambio"],
    icon: "bi bi-columns",
  },
  
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(Array(navigation.length).fill(false));
  const handleSubmenuClick = (index) => {
    const newSubmenuOpen = [...submenuOpen];
    newSubmenuOpen[index] = !newSubmenuOpen[index];
    setSubmenuOpen(newSubmenuOpen);
  };


  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
          <div></div>
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">FCEFA</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              {navi.opcion.length >= 1 ? (
                <div>
                  <Button
                    className="nav-link btn btn-secondary py-3 d-flex align-items-center"
                    outline 
                    onClick={() => handleSubmenuClick(index)}
                    style={{ textAlign: 'start', width: '100%', justifyContent: 'flex-start' }}
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Button>
                  {submenuOpen[index] && (
                    <ul className={`submenu ${submenuOpen[index] ? 'slideDown' : 'slideUp'}`}>
                      {navi.opcion.map((option, idx) => (
                        <li key={idx}>
                          <Link
                            to={navi.href[idx]}
                            className={
                              location.pathname === navi.href[idx]
                                ? "active nav-link py-3"
                                : "nav-link text-secondary py-3"
                            }
                          >
                            {option}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={navi.href[0]}
                  className={
                    location.pathname === navi.href[0]
                      ? "active nav-link btn btn-secondary py-3"
                      : "nav-link text-secondary py-3"
                  }
                  style={{ textAlign: 'start', width: '100%', justifyContent: 'flex-start' }}
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              )}
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
