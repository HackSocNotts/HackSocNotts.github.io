import React from 'react';

import { Segment, Grid, Header, Divider, Container, Icon, Image } from 'semantic-ui-react';

import backgroundImage from 'resources/background.jpg';
import AaronOsher from 'resources/team/AaronOsher.jpg';
import PrimozFabiani from 'resources/team/PrimozFabiani.jpg';
import JohnMercer from 'resources/team/JohnMercer.jpg';
import DanielCordell from 'resources/team/DanielCordell.jpg';
import ZainAli from 'resources/team/ZainAli.jpg';
import HaniMomeninia from 'resources/team/HaniMomeninia.jpeg';
import SamuelKing from 'resources/team/SamuelKing.jpg';
import TaraDilley from 'resources/team/TaraDilley.jpg';
import MiaMukherjee from 'resources/team/MiaMukherjee.jpg';
import AlexanderDewfall from 'resources/team/AlexanderDewfall.jpg';
import AlexanderDewfall2 from 'resources/team/AlexanderDewfall2.jpg';
import HannahLester from 'resources/team/HannahLester.jpg';
import ViktoriaPopovici from 'resources/team/ViktoriaPopovici.jpg';
import OctavianSalagean from 'resources/team/OctavianSalagean.jpg';

import { ResponsiveContainer } from '../../Containers';
import HomePageHeading from './HomePageHeading';
import { Footer } from '../../Footer';

import * as styles from './HomePage.less';

const backgroundProp = {
  overlay: 'rgba(0, 0, 0, 0.6)',
  image: backgroundImage,
  fullHeight: true,
};

const HomePage = () => (
  <ResponsiveContainer heading={HomePageHeading} background={backgroundProp}>
    <Segment className={styles.segment1} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3" className={styles.h3}>
              About HackSoc Nottingam
            </Header>
            <p className={styles.p}>
              A part of the University of Nottingham Students&apos;​ Union, HackSoc is centered around getting its
              members building, learning, and sharing new tech. Every week we have programming tutorials for complete
              beginners, advanced topics with guest speakers, and throughout the year we travel to hackathons to team up
              with other students from around the world.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" className={styles.h3}>
              Who can join?
            </Header>
            <p className={styles.p}>
              HackSoc is open to all. From newbies to seasoned developers, as long as you&apos;re interested in tech,
              HackSoc is for you.
            </p>
            <Header as="h4" className={styles.h4}>
              Newbies
            </Header>
            <p className={styles.p}>Anyone with little or no knowledge of programming; no experience required!</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Header as="h4" className={styles.h4}>
              Designers
            </Header>
            <p className={styles.p}>
              Got an idea that could work with some programming? Come along to share your idea, build your idea and get
              great things made!
            </p>
            <Header as="h4" className={styles.h4}>
              Developers
            </Header>
            <p className={styles.p}>
              Improve your skillset, meet other people like you and travel to Hackathons with friends.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Divider horizontal className={styles.h3}>
      Our Flagship Events
    </Divider>
    <Segment className={styles.segment2} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column className={styles.flagshipGrid}>
            <Header as="h3" className={styles.h3}>
              HackNotts
            </Header>
            <p className={styles.p}>
              HackNotts is a 24 hour hackathon at the University of Nottingham, in England. Over 150 students will team
              up to learn about tech and create cool stuff. Learn more about it on the&nbsp;
              <a
                href="https://hacknotts.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External - HackNotts Website"
              >
                HackNotts Website.
              </a>
              .
            </p>
          </Grid.Column>
          <Grid.Column className={styles.flagshipGrid} id="hack-quarantine">
            <Header as="h3" className={styles.h3}>
              Hack Quarantine
            </Header>
            <p className={styles.p}>
              Hack Quarantine is a fully-online, people-focused hackathon bringing people together to use their skills
              to help combat the issues the world is facing with the COVID-19 pandemic. Learn more about it on the&nbsp;
              <a
                href="https://hackquarantine.com"
                target="_blank"
                rel="noopener noreferrer"
                arial-label="External - Hack Quarantine Website"
              >
                Hack Quarantine Website
              </a>
              .
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment className={styles.segment3} vertical id="team">
      <Container text>
        <Header as="h3" className={styles.h3}>
          Our Team
        </Header>
        <p className={styles.p}>
          HackSoc is run by a committed and motivated team of students striving to give our members the best experiences
          possible.
        </p>
      </Container>
      <Divider hidden />
      <Grid stackable centered>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={AaronOsher} size="medium" />
            <p>
              <span className={styles.p}>Aaron Osher</span>
              <br />
              President
              <br />
              <a href="mailto:aaron@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/aaronosher" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://linkedin.com/in/aaronosher" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={AlexanderDewfall} size="medium" />
            <p>
              <span className={styles.p}>Alexi Dewfall</span>
              <br />
              Vice President
              <br />
              <a href="mailto:alexander@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/AcAksan" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://linkedin.com/in/alexander-dewfall-0ab3ba173" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={PrimozFabiani} size="medium" />
            <p>
              <span className={styles.p}>Primoz Fabiani</span>
              <br />
              General Secretary
              <br />
              <a href="mailto:primoz@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              {/* <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <Icon link name='twitter' className={styles.twitter} />
              </a> */}
              <a href="https://www.linkedin.com/in/primoz-fabiani-095121186" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={JohnMercer} size="medium" />
            <p>
              <span className={styles.p}>John Mercer</span>
              <br />
              Treasurer
              <br />
              <a href="mailto:john@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://www.linkedin.com/in/john-kendal-mercer/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={HannahLester} size="medium" />
            <p>
              <span className={styles.p}>Hannah Lester</span>
              <br />
              Partners Secretary
              <br />
              <a href="mailto:hannah@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/HanAthon" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://www.linkedin.com/in/hannah-l-614202139/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={HaniMomeninia} size="medium" />
            <p>
              <span className={styles.p}>Hani Momeninia</span>
              <br />
              Cyber Security Secretary
              <br />
              <a href="mailto:hani@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/Hani_Momeninia" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://www.linkedin.com/in/hanimomeninia/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={SamuelKing} size="medium" />
            <p>
              <span className={styles.p}>Samuel King</span>
              <br />
              Speaker Acquisition Secretary
              <br />
              <a href="mailto:samuel@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/King_of_Sams_" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://www.linkedin.com/in/samuel-king-564514184/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={TaraDilley} size="medium" />
            <p>
              <span className={styles.p}>Tara Dilley</span>
              <br />
              Welfare and Inclusivity Secretary
              <br />
              <a href="mailto:tara@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/tara_dilley" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={DanielCordell} size="medium" />
            <p>
              <span className={styles.p}>Daniel Cordell</span>
              <br />
              Development Secretary
              <br />
              <a href="mailto:daniel@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/crdlpls" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-cordell/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image src={ZainAli} size="medium" />
            <p>
              <span className={styles.p}>Zain Ali</span>
              <br />
              Graphics Officer
              <br />
              <a href="mailto:zain@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={MiaMukherjee} size="medium" />
            <p>
              <span className={styles.p}>Mia Mukherjee</span>
              <br />
              Social Media and Communications Officer
              <br />
              <a href="mailto:mia@hacksocnotts.co.uk" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/Lepidora_" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://www.linkedin.com/in/mia-mukherjee-a7058b156/" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={OctavianSalagean} size="medium" />
            <p>
              <span className={styles.p}>Octavian V. Salagean</span>
              <br />
              HackNotts Head of Finance
              <br />
              <a href="mailto:octavian@hacknotts.com" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/therebelliovs" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://linkedin.com/in/rebelliovs" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={ViktoriaPopovici} size="medium" />
            <p>
              <span className={styles.p}>Viktoria Popovici</span>
              <br />
              HackNotts Head of Logistics
              <br />
              <a href="mailto:viktoria@hacknotts.com" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/viki_popovici" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://linkedin.com/in/viktoriapopovici" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={AlexanderDewfall2} size="medium" />
            <p>
              <span className={styles.p}>Alexander Dewfall</span>
              <br />
              HackNotts Head of Human Resources
              <br />
              <a href="mailto:alexander@hacknotts.com" target="_blank" rel="noopener noreferrer">
                <Icon link name="mail" color="green" />
              </a>
              <a href="https://twitter.com/AcAksan" target="_blank" rel="noopener noreferrer">
                <Icon link name="twitter" className={styles.twitter} />
              </a>
              <a href="https://linkedin.com/in/alexander-dewfall-0ab3ba173" target="_blank" rel="noopener noreferrer">
                <Icon link name="linkedin" className={styles.linkedIn} />
              </a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

export default HomePage;
