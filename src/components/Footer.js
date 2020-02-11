// import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    {/*
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    */}

    <section>
      <h2>Contact information</h2>
      <dl className="alt">
        {/*
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        
        <dt>Email</dt>
        */}
        <dd>
          <b>Email:</b> <a href="mailto:kinnikumeganegermany@gmail.com">kinnikumeganegermany(at)gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/KinnikuMeganeDe/"
            className="icon fa-twitter alt"
            target="_blank" rel="noopener noreferrer nofollow"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        {/*
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        */}
        <li>
          <a href="https://www.instagram.com/kinnikumegane/" className="icon fa-instagram alt" target="_blank" rel="noopener noreferrer nofollow">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kinnikumegane/"
            className="icon fa-github alt"
            target="_blank" rel="noopener noreferrer nofollow"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        {/*
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
        */}
      </ul>
    </section>
    
    <p className="copyright">
      &copy; 2020 webreelance.
    </p>
  </footer>
)

export default Footer
