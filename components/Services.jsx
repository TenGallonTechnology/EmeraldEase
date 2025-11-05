import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Fragment } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import RstTooltip from './RstTooltip'
import NrtModal from './NrtModal'
import CuppingModal from './CuppingModal'
import { useState } from 'react'

import {
  Tags,
  PhoneFill,
  CalendarDateFill,
  InfoCircle,
  QuestionLg
} from 'react-bootstrap-icons'

const Services = (props) => {
  const [showRst, setShowRst] = useState(false)
  const [showNrt, setShowNrt] = useState(false)
  const [showCupping, setShowCupping] = useState(false)
  return (
    <Fragment>
      <Row>
        <Col>
          <h3>
            Which massage is right for me
            <QuestionLg />{' '}
          </h3>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Massage Therapy is a broad umbrella that includes many different
            styles and modalities. At Emerald Ease, our therapists are trained
            in several types of modalities. Choosing the right therapist for
            you, and the correct modality that will meet your goals, will help
            to ensure you get the most out of your session. Please read the
            descriptions to help decide which modality will be most suited for
            you based on your current circumstances and needs or goals. If you
            are still unsure of what massage treatment will support you the
            most, contact Emerald Ease and our staff will help advise you.
          </p>
        </Col>
      </Row>

      <Row id='services' className='outline-light-top justify-content-center'>
        <Col className='text-center'>
          <h3>
            Our Services <Tags />
          </h3>
        </Col>
      </Row>
      <hr />
      <Row className='mb-2 justify-content-center'>
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Therapeutic Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    This session is different for each client and tailored to their specific goals and needs.
This massage can be purely relaxing or focused on specific problem areas, or blended
with both! A combination and variety of massage techniques and tools may be used,
ranging from Swedish massage, light/medium/ firm pressure, myofascial release, trigger
point, muscle stripping, deep tissue massage using bamboo sticks, cupping, or passive
stretching. The therapist will discuss your pressure preference and goals for the session
when you arrive, and will focus on the things that are important to you. This massage
treatment helps relieve stress or pain, release muscle tension, and improves overall
health.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul>
                <li>30 Minute - $65</li>
                <li>60 Minute - $100</li>
                <li>90 Minute - $150</li>
              </ul>

              <a
                className='btn btn-primary btn-sm btn-block'
                href='https://www.vagaro.com/emeraldease/book-now'
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Warm Stone Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    A delightful warm treatment using smooth, heated, basalt
                    stones to ease tension and pain and relax your body.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul>
                <li>60 Minute - $120</li>
              </ul>

              <a
                className='btn btn-primary btn-sm btn-block'
                href='https://www.vagaro.com/emeraldease/book-now'
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
         <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Sticks and Stones Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    Embrace the warmth this winter with our Sticks &amp; Stones massage — a luxurious seasonal
treatment that melts away tension and soothes the senses. Smooth, warm bamboo sticks glide
across the body to stretch and release tight muscles, while warm stones deliver deep, comforting
heat to melt stress from head to toe-- making it ideal for those who love the intensity of deep
tissue work with an added element of comforting heat. This unique fusion of warmth and flow
promotes circulation, eases sore muscles, and leaves you feeling balanced, renewed, and deeply
relaxed. A perfect cozy escape for chilly days — Sticks &amp; Stones is available for a limited time
only during the colder months.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul>
                <li>60 Minute - $110</li>
              </ul>

              <a
                className='btn btn-primary btn-sm btn-block'
                href='https://www.vagaro.com/emeraldease/book-now'
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Bodywork
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    This session is will focus on a specific issues or problem
                    areas and a primary goal. Minimal cream/gel is used. This is
                    individually tailored to each client and their desired
                    outcome. The therapist and client will work together to
                    address the goals of the client. There will be talking
                    during this session, along with interaction from the client.
                    The goal is to improve a specific issue while targeting
                    specific muscle groups, rather than simply helping you to
                    relax. This session may involve a variety of techniques,
                    passive, active, or resistive stretching techniques,
                    <Button
                      size='sm'
                      variant='link'
                      className='p-0'
                      onClick={() => setShowNrt(true)}
                    >
                      {' '}
                      Neural Reset Therapy
                    </Button>
                    ,{' '}
                    <Button
                      size='sm'
                      variant='link'
                      className='p-0'
                      onClick={() => setShowCupping(true)}
                    >
                      Cupping
                    </Button>
                    ,
                    <Button
                      size='sm'
                      variant='link'
                      className='p-0'
                      onClick={() => setShowRst(true)}
                    >
                      Rossiter Stretch Technique
                    </Button>
                    , and other manual massage techniques. This session is led
                    by the therapist who will make suggestions within the scope
                    of practice to achieve the goals for the specific outcome
                    that is desired to help improve health and overall wellness
                    for the body&apos;s connective tissues and the muscular
                    system. This is great for people who want to improve ROM or
                    mobility, specific pain issues, have carpel tunnel, TMJ,
                    plantar fasciitis, Golfer&apos;s/Tennis elbow, frozen
                    shoulder, sciatic pain, or to increase recovery and mobility
                    for athletes. This style of bodywork holistically looks at
                    the entire body, with its focus being treating pain,
                    structural dysfunctions, improving injury rehabilitation,
                    and helping eliminate acute or chronic pain. The therapist
                    may perform assessments to find out what structures are
                    causing your pain or your postural dysfunction and the
                    session will be focused around treating the muscles that are
                    causing the pain in your body. These sessions may need to be
                    more regular to begin with and your therapist may help build
                    a treatment plan that includes some self-care exercises or
                    stretching to be done at home to help improve your progress.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul>
                <li>90 Minute - $150</li>
              </ul>

              <a
                className='btn btn-primary btn-sm btn-block'
                href='https://www.vagaro.com/emeraldease/book-now'
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-2 justify-content-center'>
        <Col sm={12} md={4} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Pregnancy Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    Pre-natal therapy is specifically tailored for the expectant
                    mother&#39;s needs (past the first trimester) as her body
                    goes through the dramatic changes of pregnancy; enhances the
                    function of muscles and joints, improves circulation and
                    general body tone, and relieves mental and physical fatigue.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <ul>
                <li>30 Minute - $65</li>
                <li>60 Minute - $100</li>
              </ul>

              <a
                className='btn btn-primary btn-sm btn-block'
                href='https://www.vagaro.com/emeraldease/book-now'
              >
                Book Now <CalendarDateFill />
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Couples Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    Enjoy an hour massage with your partner, family member, or
                    friend. Great for an anniversary or birthday, or
                    mother/daughter time, or a girl&apos;s day. Two tables and
                    two licensed therapists mean double the relaxation!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <small>
                <InfoCircle className='highlight' /> You must call to book this
                appointment!
              </small>

              <ul>
                <li>60 Minute - $200</li>
              </ul>

              <a
                href='tel:4786970721'
                className='btn btn-primary btn-sm btn-block'
              >
                Call Now to Book <PhoneFill />
                478-697-0721
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Chair Massage
            </Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <InfoCircle />
                    More Info
                  </Accordion.Header>
                  <Accordion.Body>
                    A 10/15-minute clothed massage focused on the back,
                    shoulders, neck, arms, and head. The client is in a seated
                    position in a specialized, adjustable, padded chair. This
                    massage is intended to relax the muscles, improve
                    flexibility and movement, reduce stress, enhance
                    circulation, and increase overall well-being. This service
                    is offered for businesses or larger groups. We will travel
                    and come to your office! Call Emerald Ease for a quote.
                    Individual chair massages are not currently offered at
                    Emerald Ease.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <small>
                <InfoCircle className='highlight' /> You must call to book this
                appointment!
              </small>

              <ul>
                <li>Corporate - $100 per hour, per therapist + travel</li>
              </ul>

              <a
                href='tel:4786970721'
                className='btn btn-primary btn-sm btn-block'
              >
                Call Now to Book <PhoneFill />
                478-697-0721
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <RstTooltip show={showRst} setShow={setShowRst} />
      <CuppingModal show={showCupping} setShow={setShowCupping} />
      <NrtModal show={showNrt} setShow={setShowNrt} />
    </Fragment>
  )
}

export default Services
