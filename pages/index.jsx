import { Fragment } from "react";

import Head from "next/head";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
  EnvelopeFill,
  PhoneFill,
  Geo,
  Building,
  InfoCircle,
  Facebook,
  CalendarCheck,
} from "react-bootstrap-icons";

import fredRoberts from "../public/fredRoberts.jpg";
import pbits from "../public/pbits.png";

import Services from "../components/Services";

export default function Home() {
  return (
    <Fragment>
      <Container>
        <Head>
          <title>Emerald Ease</title>
          <meta
            name="description"
            content="Andrea Craft, Licensed Massage Practitioner who specializes in relaxing and therapeutic massage modalities including Swedish, maternity, Myofascial Release, sports/orthopedic, hot stone, chair massage and bodywork. Book your appointment today!"
          />
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="canonical" href="http://emeraldease.com/" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Image
                alt=""
                src="/logo.png"
                width="150"
                height="150"
                layout={"intrinsic"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://www.vagaro.com/emeraldease">
                  Schedule Appointment
                </Nav.Link>

                <Nav.Link href="https://www.google.com/search?q=emerald+ease+dublin#lrd=0x88f12182c794d1c3:0xb9e39778f5cf7a28,1,,,">
                  Reviews
                </Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <div className="card text-dark bg-secondary mt-5 mb-5 text-center">
            <div className="card-body">
              <p className="m-0">
                Book Your Appointment Now!{" "}
                <a
                  className="btn btn-outline-dark btn-sm"
                  href="https://www.vagaro.com/emeraldease"
                >
                  <CalendarCheck /> Schedule
                </a>
              </p>
            </div>
          </div>

          <Row>
            <Col xs={12} md={6} className="outline-light-top">
              <h3 className="text-center">
                Our Location <Building />
              </h3>
              <p className="bg-dark text-light p-5 rounded">
                We are located at{" "}
                <a
                  className="text-info"
                  href="https://maps.google.com/maps?key=AIzaSyDaa0FdAfpQzAF1c7Twg7QyIZZ_iFHthto&daddr=306%20Academy%20Avenue,%20101,Dublin,Georgia,31021&saddr=&hl=en"
                >
                  306 Academy Avenue, Suite 101, Dublin, GA 31021
                </a>{" "}
                in the Fred Roberts downtown.
              </p>
              <Image
                alt=""
                src={fredRoberts}
                layout={"responsive"}
                className="rounded"
              />
            </Col>
            <Col xs={12} md={6} className="outline-light-top">
              <h3 className="text-center">
                Directions <Geo />
              </h3>
              <div className="iframe-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.5341875752633!2d-82.90960588482402!3d32.53858578104461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f12182c794d1c3%3A0xb9e39778f5cf7a28!2sEmerald%20Ease!5e0!3m2!1sen!2sus!4v1634331159520!5m2!1sen!2sus"
                  style={{ border: "0" }}
                  className="responsive-iframe"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>

          <Row className=" outline-light-top">
            <Col>
              <h3 className="text-center">
                About Us <InfoCircle />
              </h3>
            </Col>
          </Row>
          <Row>
            <Col sm={3} lg={3}>
              <Image
                alt=""
                src="/AC.jpg"
                width="225"
                height="225"
                layout={"intrinsic"}
                className="shadow-lg rounded"
              />
            </Col>
            <Col sm={9} lg={9}>
              <p>
                Emerald Ease is a locally owned business with licensed massage
                therapists offering relaxing and therapeutic massages and
                bodywork. We offer many massage types such as Swedish, prenatal,
                myofascial release, sports/orthopedic, reflexology, and hot
                stone.
              </p>
            </Col>
          </Row>
          <Services />
          <Row id="contact" className="mb-5 outline-light-top">
            <Col lg={6} sm={12} className="text-center">
              <h3>How to reach us</h3>
            </Col>
            <Col lg={3} sm={4}>
              <a
                href="mailto:emeraldease@gmail.com"
                className="btn btn-outline-primary btn-block "
              >
                <EnvelopeFill />
                emeraldease@gmail.com
              </a>
            </Col>
            <Col lg={3} sm={4}>
              <a
                href="tel:4786970721"
                className="btn btn-outline-primary btn-block"
              >
                <PhoneFill />
                478-697-0721
              </a>
            </Col>
          </Row>
        </main>
      </Container>
      <Container className="bg-dark text-light overflow-hidden" fluid="true">
        <footer className="mb-2">
          <Row>
            <Col>
              <div style={{ width: "50px" }} className="float-end">
                <a href="https://www.pbits.online">
                  <Image src={pbits} alt="PBITS" />
                </a>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="text-center">
              <small>©Emerald Ease 2021 </small>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="text-center">
              <a href="https://www.facebook.com/Emeraldeasemassage/">
                <Facebook />
              </a>
            </Col>
          </Row>
        </footer>
      </Container>
    </Fragment>
  );
}
