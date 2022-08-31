import { FooterContainer, FooterColumn } from "./ComponentsStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-column-container">
        <FooterColumn>
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </FooterColumn>
        <FooterColumn className="social">
          <h1>Social</h1>
          <ul>
            <li>
              <img src="https://svgshare.com/i/5fq.svg" width="32" />
            </li>
            <li>
              <img src="https://svgshare.com/i/5eA.svg" width="32" />
            </li>
            <li>
              <img src="https://svgshare.com/i/5f_.svg" width="32" />
            </li>
          </ul>
        </FooterColumn>
        <div className="clearfix"></div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
