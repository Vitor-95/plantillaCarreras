import React from "react";
import { Col, Row } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";


const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",

  },
];

const ModalidadTitulacion = () => {


  return (
    <div>
      
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Modalidad Titulacion
        </CardTitle>
        <CardBody className="">
          <Row>
            {BlogData.map((blg, index) => (
              <Col sm="12"
                md={{
                  offset: 2,
                  size: 8,
                }} key={index}>
                <Blog
                  image={blg.image}
                  title={blg.title}
                  subtitle={blg.subtitle}
                  text={blg.description}
                />
                
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default ModalidadTitulacion;
