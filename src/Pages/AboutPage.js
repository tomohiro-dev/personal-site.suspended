import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServiceSection from '../Components/ServiceSection';
import design from '../img/design.svg';

function AboutPage() {
  return (
    <div className="AboutPage">
      {/* <h1>About Page</h1> */}
      {/* FIXME:最後に削除 */}
      <Tittle title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Tittle title={'My Skills'} span={'My Skills'} />
      <div className="SkillsContainer">
        {/* FIXME:リファクタリング時にclass名を変える↑(_about.scss) */}
        <SkillsSection skill={'Javacript'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
        <SkillsSection skill={'React.js'} progress={'70%'} width={'70%'} />
        <SkillsSection skill={'Node.js'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
        <SkillsSection skill={'Vue.js'} progress={'40%'} width={'40%'} />
        <SkillsSection skill={'Kotlin'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
        <SkillsSection skill={'UI/UX Design'} progress={'76%'} width={'76%'} />
      </div>

      <div className="services-container">
        <ServiceSection image={design} title={'Web Design'} />
        <ServiceSection image={design} title={'Web Design'} />
        <ServiceSection image={design} title={'Web Design'} />
      </div>
    </div>
  );
}

export default AboutPage;
