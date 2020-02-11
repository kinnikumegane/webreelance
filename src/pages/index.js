// import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

// import new images
import kinnikumeganejapanese from '../assets/images/kinnikumeganejapanese.jpg'
import yangjayang from '../assets/images/yangjayang.jpg'
import englishportfolio from '../assets/images/englishportfolio.jpg'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Webreelance" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <header className="major">
              <h2>SERVICE</h2>
              <p>
                Hello everyone, it's me Japanese, made and born in Japan.
                <br />
                I started freelance work since January 1st 2020, and this is my first English portfolio.
                <br />
                Not many projects experience yet, but <b>motivation + persistence</b> drive me to complete projects in timely manner.
              </p>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style5 fa-diamond"></span>
                {/* <span className="icon major style1 fa-code"></span> */}
                <h3>Front-end design</h3>
                <ul className="features-frontend">
                  <li>GatsbyJS</li>
                  <li>ReactJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
              </li>
              <li>
                <span className="icon major style3 fa-shopping-cart"></span>
                {/* <span className="icon major style3 fa-copy"></span> */}
                <h3>CMS & eCommerce</h3>
                <ul className="features-cms">
                  <li>WordPress</li>
                  <li>Shopify</li>
                </ul>
              </li>
              <li>
                <span className="icon major style1 fa-code"></span>
                {/* <span className="icon major style5 fa-diamond"></span> */}
                <h3>Data analysis</h3>
                <ul className="features-cms">
                  <li>Machine Learning</li>
                  <li>Python</li>
                  <li>Pandas</li>
                  <li>Matlab</li>
                  <li>NumPy</li>
                </ul>
              </li>
            </ul>
            {/* 
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
            */}
            {/* 
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ipsum sed adipiscing</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
            */}
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Portfolio</h2>
            </header>
            
            <ul className="features">
              <li>
                <span className="image">
                  <a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer nofollow"><img src={kinnikumeganejapanese} alt="japanese blog of kinnikumegane" /></a>
                </span>
                <h3><a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer nofollow">Blog in Japanese</a></h3>
                <p>
                  <a href="https://kinnikumegane.com" target="_blank" rel="noopener noreferrer nofollow">
                    Japanese Blog website built using GatsbyJS powered by ReactJS, graphql hosted on Netlify.  
                    Content focuses on the process, tutorials how to enhance features of GatsbyJS blog.
                  </a>
                </p>
              </li>
              <li>
                <span className="image">
                <a href="https://yang-musikzimmer.com" target="_blank" rel="noopener noreferrer nofollow"><img src={yangjayang} alt="blog of violinist Yangja Yang" /></a>
                </span>
                <h3><a href="https://yang-musikzimmer.com" target="_blank" rel="noopener noreferrer nofollow">Violinist Yangja Yang</a></h3>
                <p>
                  <a href="https://yang-musikzimmer.com" target="_blank" rel="noopener noreferrer nofollow">
                    Japanese Blog website built using WordPress Content Management System enhanced with Elementor.  
                    Content focuses on the archived concert infomration as well as upcoming events of Ms. Yangja Yang.
                  </a>
                </p>
              </li>
              <li>
                <span className="image">
                <a href="#intro"><img src={englishportfolio} alt="This portfolio site" /></a>
                </span>
                <h3><a href="#intro">Portfolio</a></h3>
                <p>
                  <a href="#intro">
                    This English portfolio site built using GatsbyJS powered by ReactJS hosted on Netlify.  
                    Content focuses on my service, portfolio, background and contact information.
                  </a>
                </p>
              </li>
              {/*
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              */}
            </ul>
            {/*
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
            */}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>About me</h2>
              <p>
                Hello everyone, it's me Japanese, made and born in Japan.
                <br />
                I started freelance work since January 1st 2020, and this is my first English portfolio.
                <br />
                Not many projects experience yet, but <b>motivation + persistence</b> drive me to complete projects in timely manner.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>175</strong> Height
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>75</strong> Weight
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>3?</strong> Age
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>3</strong> Projects
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>∞</strong> Motivation
              </li>
            </ul>
            <p className="content">
              At the age of seven, I used personal computer of my mother for the first time in my life that she was given from her work. In her spare time, she let me to play computer game, which was read from Floppy Disk. I was into playing this game for hours and hours and became the best player in my family in few weeks. The name of this game is <a href="https://play.google.com/store/apps/details?id=jp.bio100.android.superdepth&hl=en" target="_blank" rel="noopener noreferrer nofollow">"Super Depth".</a>
              <br />
              In 2013 December, I signed up Codecamdemy to learn programming. That's the start of whole journey. Since then, I have studied several programming languages online, set up eCommerce, my personal portoflio (yes, I had one before), learned machine learning.
              <br />
              Last 6 years as hobbiest prepared me well to further do, work with customer and accelerate cusotmer's business with my web development skills.
              <br />
              Thank you so much for reading and looking forward to develivering values to your business.
            </p>
            {/*
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
            */}
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>
                Please feel free to email me at kinnikumeganegermany(at)gmail.com
                
                {/*
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
                */}
              </p>
            </header>
            {/*
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
            */}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
