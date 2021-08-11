import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import succIcon from '../images/succIcon.png';
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Skills() {
    return (
        <div className="skillsContainer">
            <div className="skillsHeader">
                <img src={succIcon} alt="Succulent Icon" className="skillsImage"/>
                <h1 className="skillsTitle">
                Skills &amp; Technologies
                </h1>
                <p className="skillsQuote">
                “The mind is not a vessel to be filled, but a fire to be kindled.”
                ― Plutarch  
                </p>
            </div>
        <div>
            <Container>
                {skills.map((skill) => (
                <Row key={skill}>
                    <Col xs={2} md={4} lg={6}>
                        <Card className="card">
                            <Card.Body className="cardBody">
                                <BadgeCheckIcon className="badgeCheckIcon"/>
                                <Card.Title className="cardTitle">{skill}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                ))}
            </Container>
        </div>
        </div>
    );
}