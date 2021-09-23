import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AirmixIconCard from '../../../../../SharedComponents/AirmixIconCard/AirmixIconCard'
import './Block3.scss'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import ScrollAnimation from 'react-animate-on-scroll'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

interface Block3Props {}

const Block3 = (props: Block3Props) => {
  return (
    <Container fluid className="Block3">
      <Container className="Block3__contaner d-none d-sm-block">
        <Row className="Block3__Row m-0 ">
          <Col lg={6} className="Block3__Col">
            <div className="Block3__card1">
              <AirmixIconCard img="/img/3-1.png" icon="/img/svg/3-1.svg">
                Только оригинальные комплектующие
              </AirmixIconCard>
            </div>
          </Col>
          <Col lg={6} className="Block3__Col">
            <div className="Block3__card2">
              <AirmixIconCard img="/img/3-2.png" icon="/img/svg/3-2.svg">
                Контролируем производство на каждом этапе
              </AirmixIconCard>
            </div>
          </Col>
        </Row>
        <Row className="Block3__Row m-0">
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card3">
              <AirmixIconCard icon="/img/svg/3-3.svg">Низкая цена</AirmixIconCard>
            </div>
          </Col>
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card4">
              <AirmixIconCard img="/img/3-4.png" icon="/img/svg/3-4.svg">
                Высокое качество продукта
              </AirmixIconCard>
            </div>
          </Col>
          <Col lg={4} className="Block3__Col">
            <div className="Block3__card5">
              <AirmixIconCard img="/img/3-5.png" icon="/img/svg/3-5.svg">
                До 1 000 затяжек
              </AirmixIconCard>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="Block3__contaner d-block d-sm-block">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={10}
          pagination={{ el: '.Services__pagination', clickable: true }}
          navigation={{
            nextEl: '.Services__next',
            prevEl: '.Services__prev',
          }}
        >
          <SwiperSlide>
            <div className="Block3__mobCard1 Block3__Slide">
              <AirmixIconCard img="/img/3-1.png" icon="/img/svg/3-1.svg">
                Только оригинальные комплектующие
              </AirmixIconCard>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Block3__mobCard2 Block3__Slide">
              <AirmixIconCard img="/img/3-2.png" icon="/img/svg/3-2.svg">
                Контролируем производство на каждом этапе
              </AirmixIconCard>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Block3__mobCard3 Block3__Slide">
              <AirmixIconCard icon="/img/svg/3-3.svg">Низкая цена</AirmixIconCard>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Block3__mobCard4 Block3__Slide">
              <AirmixIconCard img="/img/3-4.png" icon="/img/svg/3-4.svg">
                Высокое качество продукта
              </AirmixIconCard>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Block3__mobCard5 Block3__Slide">
              <AirmixIconCard img="/img/3-5.png" icon="/img/svg/3-5.svg">
                До 1 000 затяжек
              </AirmixIconCard>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  )
}

export default Block3
