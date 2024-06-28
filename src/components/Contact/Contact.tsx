import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/twitter.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p> I am always open to discussing web development, problem-solving, and potential collaboration opportunities.</p>
        <p>Let's connect and create something amazing together! </p>
        <p>Feel free to reach out to me .</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:anushkagupta319@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:anushkagupta319@gmail.com">anushkagupta319@gmail.com</a>
        </div>
        <div>
        <a href="https://x.com/Anushkag031"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="https://x.com/Anushkag031">Connect with me on X.</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}