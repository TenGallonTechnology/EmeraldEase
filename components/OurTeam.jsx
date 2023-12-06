import Image from 'next/legacy/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { PersonHeart, InfoCircleFill } from 'react-bootstrap-icons'
import andrea from '../public/andrea.jpg'
import codi from '../public/codi.jpg'
import natalie from '../public/natalie.jpg'
import megan from '../public/megan.jpg'
import coleen from '../public/coleen.jpg'
import wholeTeam from '../public/wholeTeam.jpg'

const OurTeam = () => {
  return (
    <Row className='outline-light-top'>
      <Col xs={12} md={8}>
        <h3 className='font-weight-light'>
          About Us <InfoCircleFill />
        </h3>
        <Image
          alt=''
          src={wholeTeam}
          layout={'responsive'}
          className='rounded'
        />
        <small>
          Emerald Ease is a locally owned business with licensed massage
          therapists offering relaxing and therapeutic massages and bodywork. We
          offer many modality options such as Swedish, deep tissue, prenatal,
          aromatherapy, warm stones, couples, chair massage, Therapeutic,
          Cupping Therapy, and Rossiter Stretching.
        </small>
      </Col>
      <Col xs={12} md={4}>
        <h3 className='font-weight-light text-center'>
          Our Team <PersonHeart />
        </h3>
        <Carousel className='m-1' slide>
          <Carousel.Item>
            <Image
              alt=''
              src={andrea}
              layout={'responsive'}
              className='rounded'
            />
            <Carousel.Caption className='team-card-text'>
              <h5>Andrea</h5>
              <small className='teamCaption'>
                Andrea Craft, LMT owner of Emerald Ease, became licensed as a
                therapist in 2021. She was an educator in Laurens County for 14
                years before becoming a LMT. She offers Swedish, therapeutic,
                prenatal, warm stones, couples, cupping therapy, and chair
                massages.
              </small>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={codi}
              layout={'responsive'}
              className='rounded'
            />
            <Carousel.Caption className='team-card-text'>
              <h5>Codi</h5>
              <small className='teamCaption'>
              Codi is a LMT, CPT, and a Deputy in Laurens County.
              He offers therapeutic massages that include deep tissue, trigger point release, and myofascial release with the goal of combining relaxation, pain management, and recovery. 
              </small>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={natalie}
              layout={'responsive'}
              className='rounded'
            />
            <Carousel.Caption className='team-card-text'>
              <h5>Natalie</h5>
              <small className='teamCaption'>
                Natalie Newsome, LMT has been a massage therapist for over 14
                years. She has experience in Swedish, Neuromuscular, and Deep
                Tissue Massage. She is also a yoga instructor and a potter.
              </small>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={megan}
              layout={'responsive'}
              className='rounded'
            />
            <Carousel.Caption className='team-card-text'>
              <h5>Megan</h5>
              <small className='teamCaption'>
                Megan Shepard, LMT has over 21 years experience as a licensed
                massage therapist and specializes in relaxing Swedish massage.
                She also has further training in pre/perinatal massage, heated
                stone massage, and aromatherapy. Megan is also a licensed
                esthetician, a certified yoga instructor, and owner of Pinehill
                Candle Company.
              </small>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={coleen}
              layout={'responsive'}
              className='rounded'
            />
            <Carousel.Caption className='team-card-text'>
              <h5>Coleen </h5>
              <small className='teamCaption'>
                Coleen will be helping with scheduling and making sure your
                experience at Emerald Ease is exceptional! Give us a call and
                let Coleen help get you scheduled for an appointment!
              </small>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default OurTeam
