import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Fragment } from 'react'

import {
  Tags,
  PhoneFill,
  CalendarDateFill,
  InfoCircle,
  QuestionLg
} from 'react-bootstrap-icons'

const Services = (props) => {
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
            you based on your current circumstances and needs or goals. Both
            relaxing massage and therapeutic massage are beneficial. If
            you&apos;re feeling stressed and exhausted, a relaxation massage is
            going to be most valuable. If you&apos;re experiencing specific
            issues with muscle pain or tension, or need help in regards to
            strength, flexibility, or range of motion, or have a specific
            desired outcome, then a therapeutic massage is going to be most
            beneficial. If you are still unsure of what massage treatment will
            support you the most, contact Emerald Ease and our staff will help
            advise you.
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
      <Row>
        <Col>
          <h4>Relaxation Massage</h4>
          <p>
            A relaxation massage is a smooth, gentle treatment that relieves
            muscular tension, increases circulation, and promotes a general
            sense of relaxation. It helps activate the parasympathetic nervous
            system (rest and digest) and calms and settles the mind and body.
            This massage is a pain free therapy that is performed using Swedish
            techniques consisting of long, rhythmic strokes, gliding, and small
            circular movements which help to break down adhesions and promote
            better circulation. Relaxation massage provides a general loosen up,
            encourages blood flow throughout the body, and helps boost the
            immune system by stimulating the lymphatics. Unlike deep tissue
            massages, a relaxation massage does not address the connective
            tissue of the muscles. and is instead used to reduce muscle tension
            while bringing the body back to a relaxed state. Many people seek
            relaxation massage treatments during a stressful time or to help
            improve their mental and emotional health.
          </p>
        </Col>
      </Row>
      <Row className='mb-2 justify-content-center'>
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Swedish Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A relaxing, gentle massage to facilitate smooth, gliding strokes
                over the body using light to medium pressure. Best suited for
                clients interested in reducing stress, calming and relaxing the
                mind and body and improving overall health.
              </Card.Text>
              <ul>
                <li>30 Minute - $50</li>
                <li>60 Minute - $75</li>
                <li>90 Minute - $110</li>
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
              Deep Tissue Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A deep tissue massage centers on realigning the deeper layers of
                connective tissue and muscle tissue. It aims to release the
                chronic patterns of tension in the body through slow strokes and
                deep pressure on the tense areas, either following or going
                across the fibers of the muscles, tendons, and fascia. It is
                particularly helpful for continually tight and contracted areas
                such as stiff necks, low back tightness, and sore shoulders.
              </Card.Text>
              <ul>
                <li>30 Minute - $60</li>
                <li>60 Minute - $90</li>
                <li>90 Minute - $125</li>
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
              <Card.Text>
                A delightful warm treatment using smooth, heated, basalt stones
                to ease tension and pain and relax your body.
              </Card.Text>
              <ul>
                <li>60 Minute - $90</li>
                <li>90 Minute - $125</li>
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
              Aromatherapy Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Ninety minutes of relaxation using the DoTerra Aromatouch
                massage technique. This session uses select DoTerra essential
                oils (Balance, Lavender, Peppermint, Tea Tree, Wild Orange,
                AromaTouch, Deep Blue, and On Guard) in a unique sequence that
                provides the ultimate essential oil experience.
              </Card.Text>
              <ul>
                <li>90 Minute - $125</li>
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
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Pregnancy Massage
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
              Couples Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Enjoy an hour massage with your partner, family member, or
                friend. Great for an anniversary or birthday, or mother/daughter
                time, or a girl&apos;s day. Two tables and two licensed
                therapists mean double the relaxation!
                <br />
                <small>
                  <InfoCircle className='highlight'></InfoCircle> You must call
                  to book this appointment!
                </small>
              </Card.Text>
              <ul>
                <li>60 Minute - $160</li>
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
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Chair Massage
            </Card.Header>
            <Card.Body>
              <Card.Text>
                A 15-minute clothed massage focused on the back, shoulders,
                neck, arms, and head. The client is in a seated position in a
                specialized, adjustable, padded chair. This massage is intended
                to relax the muscles, improve flexibility and movement, reduce
                stress, enhance circulation, and increase overall well-being.
                This service is offered for businesses or larger groups. We will
                travel and come to your office! Call Emerald Ease for a quote.
                Individual chair massages are not currently offered at Emerald
                Ease.
                <br />
                <small>
                  <InfoCircle className='highlight'></InfoCircle> You must call
                  to book this appointment!
                </small>
              </Card.Text>
              <ul>
                <li>15 Minute - $20</li>
                <li>Corporate - $80/hr Plus travel</li>
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

      <hr />
      <Row>
        <Col>
          <h4>Therapeutic Bodywork</h4>
          <p>
            The therapeutic modalities will focus on a specific issue or problem
            area and primary goal. It is individually tailored to each client
            and their desired outcome. The therapist and client will work
            together to address the goals of the client. There may be talking
            during this session, along with interaction from the client.
            Therapeutic techniques specifically target the discomfort caused by
            tense muscles to restore your body back to a tension-free state. The
            goal of a therapeutic massage is to improve a specific issue while
            targeting specific muscle groups, rather than simply helping you to
            relax. This style of bodywork holistically looks at the entire body,
            with its focus being treating pain, structural dysfunctions,
            improving injury rehabilitation, and helping eliminate acute or
            chronic pain. The therapist may perform assessments to find out what
            structures are causing your pain or your postural dysfunction and
            the session will be focused around treating the muscles that are
            causing the pain in your body. These sessions may need to be more
            regular to begin with and your therapist may help build a treatment
            plan that includes some self-care exercises or stretching to be done
            at home to help improve your progress.
          </p>
        </Col>
      </Row>

      <Row className='mb-5 justify-content-center'>
        <Col sm={12} md={3} className='my-1'>
          <Card>
            <Card.Header as='h5' className='text-center'>
              Therapeutic Session{' '}
            </Card.Header>
            <Card.Body>
              <Card.Text>
                This session may involve a variety of techniques, including
                trigger point therapy, Myofascial release, Neural Reset Therapy,
                muscle stripping, deep tissue massage, and passive, active, or
                resistive stretching techniques. The pressure can be deeper at
                times than in relaxation massage, but always working in what is
                tolerable for the client. This session is led by the therapist
                who will make suggestions within the scope of practice to
                achieve the goals for the specific outcome that is desired to
                help improve health and overall wellness for the body&apos;s
                connective tissues and the muscular system.
              </Card.Text>
              <ul>
                <li>30 Minute - $60</li>
                <li>60 Minute - $90</li>
                <li>90 Minute - $125</li>
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
              Dry Cupping Therapy
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Dry Cupping therapy applies pressure on the body surface using
                glass, plastic, or silicone cups. Cupping is a deeper tissue
                modality that creates a vacuum or suction which stimulates and
                increases blood flow, which can help relieve joint and muscle
                pain and tension. It also loosens soft connective tissue and
                adhesions, moves stagnation &amp; reduces inflammation,
                accelerates recovery, increases the function of the lymphatic
                and circulatory systems and promotes overall relaxation and
                well-being.
                <br />
                <InfoCircle className='highlight' />
                consent waiver required before session
              </Card.Text>
              <ul>
                <li>30 Minute - $60</li>
                <li>60 Minute - $90</li>
                <li>90 Minute - $125</li>
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
              Traditional Thai Bodywork
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Thai bodywork is performed with the client wearing comfortable
                clothing, and uses no oil or cream. Thai massage allows the
                therapist to lengthen the client&apos;s fascia as well as
                stretch the muscles through compression, acupressure, and
                assisted stretching. The therapist uses their legs, knees, and
                feet to turn and fold the client to initiate and assist deep
                stretches. Traditional Thai is performed on a floor mat.
              </Card.Text>
              <ul>
                <li>60 Minute - $90</li>
                <li>90 Minute - $125</li>
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
              Rossiter Stretching Technique
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Rossiter Stretching Technique (RST) is a unique, effective, and
                safe two-person stretching protocol that not only quickly
                alleviates pain but can prevent its re-occurrence. Rossiter
                Fascial Stretching helps clients who have restricted or limited
                movement. By using the three dimensions of weight, lock, and
                movement, RST works anywhere the technique is applied. This type
                of bodywork combines common connective tissue and soft-tissue
                modalities with the uniquely powerful addition of active client
                participation in the stretching techniques. RST helps increase
                flexibility, range of motion, mobility, and reduces incidents of
                injury and pain from repetitive movements. It helps optimize the
                potential of your connective tissue (fascia) and its ability to
                move more freely. RST is great for athletes and people who
                exercise or workout.
              </Card.Text>
              <ul>
                <li>60 Minute - $60</li>
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
    </Fragment>
  )
}

export default Services
