import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";

import {
  Tags,
  PhoneFill,
  CalendarDateFill,
  InfoCircle,
} from "react-bootstrap-icons";

const Services = (props) => {
  return (
    <Fragment>
      <Row id="services" className="outline-light-top justify-content-center">
        <Col className="text-center">
          <h3>
            Our Services <Tags />
          </h3>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col sm={12} md={4}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Therapeutic Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Uses massage oils to facilitate smooth, gliding strokes over the
                entire body; performed at your chosen pressure, helps de-stress,
                calm, and relax the mind and body.
              </Card.Text>
              <ul>
                <li>30 Minute - $50</li>
                <li>60 Minute - $75</li>
                <li>90 Minute - $110</li>
              </ul>

              <a
                className="btn btn-primary btn-sm btn-block"
                href="https://www.vagaro.com/emeraldease/book-now"
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Prenatal Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Pre-natal therapy is specifically tailored for the expectant
                mother&apos;s needs (past the first trimester) as her body goes
                through the dramatic changes of pregnancy; enhances the function
                of muscles and joints, improves circulation and general body
                tone, and relieves mental and physical fatigue.
              </Card.Text>
              <ul>
                <li>30 Minute - $55</li>
                <li>60 Minute - $80</li>
              </ul>

              <a
                className="btn btn-primary btn-sm btn-block"
                href="https://www.vagaro.com/emeraldease/book-now"
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Hot Stone Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A delightful warm treatment using smooth, heated, basalt stones
                to ease tension and pain
              </Card.Text>
              <ul>
                <li>60 Minute - $90</li>
              </ul>

              <a
                className="btn btn-primary btn-sm btn-block"
                href="https://www.vagaro.com/emeraldease/book-now"
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col sm={12} md={4}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Chair Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A 15-minute clothes massage focused on the back, shoulders,
                neck, arms, and head. The client is in a seated position in a
                specialized, adjustable, padded chair. This massage is intended
                to relax the muscles, improve flexibility and movement, reduce
                stress, enhance circulation, and increase overall well-being.
                <br />
                <small>
                  <InfoCircle className="highlight"></InfoCircle> You must call
                  to book this appointment!
                </small>
              </Card.Text>
              <ul>
                <li>15 Minute - $20</li>
                <li>We will travel to your business - $80 per hour.</li>
              </ul>

              <a
                href="tel:4786970721"
                className="btn btn-primary btn-sm btn-block"
              >
                Call Now to Book <PhoneFill />
                478-697-0721
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Couples Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Enjoy a massage with your partner or friend. Two tables and two
                licensed therapists mean double the relaxation!
                <br />
                <small>
                  <InfoCircle className="highlight"></InfoCircle> You must call
                  to book this appointment!
                </small>
              </Card.Text>
              <ul>
                <li>60 Minute - $160</li>
              </ul>
              <a
                href="tel:4786970721"
                className="btn btn-primary btn-sm btn-block"
              >
                Call Now to Book <PhoneFill />
                478-697-0721
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Services;
