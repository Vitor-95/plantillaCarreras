import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Mision = lazy(() => import("../views/ui/MisionVision.js"));
const Organigrama = lazy(() => import("../views/ui/Organigrama.js"));
const Estatutos = lazy(() => import("../views/ui/Estatutos.js"));
const MallaCurricular = lazy(() => import("../views/ui/MallaCurricular.js"));
const Horarios = lazy(() => import("../views/ui/Horarios.js"));
const FechaExamen = lazy(() => import("../views/ui/FechaExamen.js"));
const Actividades = lazy(() => import("../views/ui/Actividades.js"));
const ModalidadAdmision = lazy(() => import("../views/ui/ModalidadAdmision.js"));
const RequisitoAdmision = lazy(() => import("../views/ui/RequisitoAdmision.js"));
const Matricula = lazy(() => import("../views/ui/Matricula.js"));
const ModalidadTitulacion = lazy(() => import("../views/ui/ModalidadTitulacion.js"));
const RequisitoTitulacion = lazy(() => import("../views/ui/RequisitoTitulacion.js"));
const BecaAuxiliatura = lazy(() => import("../views/ui/BecaAuxiliatura.js"));
const BecaComedor = lazy(() => import("../views/ui/BecaComedor.js"));
const BecaIntercambio = lazy(() => import("../views/ui/BecaIntercambio.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="starter" /> },
      { path: "starter", exact: true, element: <Starter /> },
      { path: "mision", exact: true, element: <Mision /> },
      { path: "organigrama", exact: true, element: <Organigrama /> },
      { path: "estatutos", exact: true, element: <Estatutos /> },
      { path: "horarios", exact: true, element: <Horarios /> },
      { path: "mallacurricular", exact: true, element: <MallaCurricular />},
      { path: "fechasExamen", exact: true, element: <FechaExamen /> },
      { path: "actividades", exact: true, element: <Actividades /> },
      { path: "modalidadAdmision", exact: true, element: <ModalidadAdmision /> },
      { path: "requisitoAdmision", exact: true, element: <RequisitoAdmision /> },
      { path: "matricula", exact: true, element: <Matricula /> },
      { path: "modalidadTitulacion", exact: true, element: <ModalidadTitulacion /> },
      { path: "requisitoTitulacion", exact: true, element: <RequisitoTitulacion /> },
      { path: "becaAuxiliatura", exact: true, element: <BecaAuxiliatura /> },
      { path: "becaComedor", exact: true, element: <BecaComedor /> },
      { path: "becaIntercambio", exact: true, element: <BecaIntercambio /> },
    ],
  },
];

export default ThemeRoutes;
