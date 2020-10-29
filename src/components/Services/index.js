import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP } from './ServiceElements';
import Icon1 from '../../images/undraw_mobile_development_8gyo.svg'
import Icon2 from '../../images/undraw_mobile_user_7oqo.svg'
import Icon3 from '../../images/undraw_Terms_re_6ak4.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Vitae Turpis</ServicesH2>
          <ServicesP>Eget nulla facilisi etiam dignissim diam quis enim lobortis. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Odio Feugiat</ServicesH2>
          <ServicesP>Eget nulla facilisi etiam dignissim diam quis enim lobortis.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Augue Mauris</ServicesH2>
          <ServicesP>Eget nulla facilisi etiam dignissim diam quis enim lobortis.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
