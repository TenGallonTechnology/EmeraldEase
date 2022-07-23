import Image from 'next/image'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import { PersonHeart, InfoCircleFill } from 'react-bootstrap-icons'

import andrea from '../public/andrea.jpg'
import codi from '../public/codi.jpg'
import natalie from '../public/natalie.jpg'
import jel from '../public/jel.jpg'
import megan from '../public/megan.jpg'
import wesley from '../public/wesley.jpg'
import wholeTeam from '../public/wholeTeam.jpg'

const OurTeam = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
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
        <p>
          Emerald Ease is a locally owned business with licensed massage
          therapists offering relaxing and therapeutic massages and bodywork. We
          offer many modality options such as Swedish, deep tissue, prenatal,
          aromatherapy, warm stones, couples, chair massage, Therapeutic,
          Cupping Therapy, Traditional Thai Bodywork, and Rossiter Stretching.
        </p>
      </Col>
      <Col xs={12} md={4}>
        <h3 className='font-weight-light text-center'>
          Our Team <PersonHeart />
        </h3>
        <Carousel className='m-2' slide>
          <Carousel.Item>
            <Image
              alt=''
              src={andrea}
              layout={'responsive'}
              className='rounded'
            />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Andrea</h4>
              <p>
                Andrea is the owner of Emerald Ease. She graduated from Augusta
                School of Massage in January of 2021. Before becoming an LMT she
                was an educator in Laurens County for 14 years. She offers
                Swedish, therapeutic, pre-natal, hot stones, couples, and chair
                massages. She enjoys helping people ease their stress and pain.
                Andrea enjoys spending time with her husband and three girls.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={codi}
              layout={'responsive'}
              className='rounded'
            />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Codi</h4>
              <p>
                Codi is a certified personal trainer and is currently pursuing
                an online degree in Kinesiology. As a licensed massage therapist
                he currently offers therapeutic massage, couples massage, &amp;
                chair massage. His long-term goal is to help clients with pain
                management, postural deviations, athletic performance &amp;
                recovery, mobility &amp; functionality, and overall health &amp;
                wellbeing.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={natalie}
              layout={'responsive'}
              className='rounded'
            />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Natalie</h4>
              <p>
                Natalie trained at Academy of Healing Arts in 2007. She has been
                a massage therapist over 14 years. She has experience in
                Swedish, Neuromuscular, and Deep Tissue Massage. She is also a
                yoga instructor &amp; a potter and owner of the Owl&apos;s Nest
                in Downtown Dublin. She is a proud mom of 2 children and enjoys
                the arts and creating beautiful pieces!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={megan}
              layout={'responsive'}
              className='rounded'
            />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Megan</h4>
              <p>
                Megan has over 21 years of experience as a licensed massage
                therapist and specializes in relaxing Swedish massage. She also
                has further training in pre/perinatal massage, heated stone
                massage, and aromatherapy. Megan is also a licensed esthetician
                and a certified yoga instructor. She enjoys spending time with
                her husband and two girls.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image alt='' src={jel} layout={'responsive'} className='rounded' />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Jel</h4>
              <p>
                Jel trained at Augusta School of Massage and has been a LMT
                almost two years. She has experience working in a chiropractic
                clinic. She has further training in Neural Reset Therapy &amp;
                Thai table and Traditional Thai massage on the mat. She owns her
                own business in Augusta where she does Thai massage &amp;
                bodywork.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              alt=''
              src={wesley}
              layout={'responsive'}
              className='rounded'
            />{' '}
            <Carousel.Caption className='team-card-text'>
              <h4>Wesley </h4>
              <p>
                Wesley helps keep Emerald Ease running smoothly with customer
                service &amp; scheduling. He has been in children&apos;s
                ministry for over 13 years. He&apos;s currently in nursing
                school at Middle Georgia State University. He has future plans
                to become a nurse practitioner. He has three children and enjoys
                CrossFit and working outside in his yard.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default OurTeam
