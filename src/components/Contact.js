import React from "react";
import '../styles';
import '../App.css';
import Fade from 'react-reveal/Fade';
import { Google,Facebook, Twitter } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
	faGithub
} from "@fortawesome/free-brands-svg-icons";

const GridWrapper = styled.div`

`;



export default class Contact extends React.Component {
	render() {
		return (
<GridWrapper>


			   <Navbar fixed="top" />
			<Helmet>
							<style>{'body { background-color: #323f54;text-align: center }'}</style>
					</Helmet>
<div class="container-contact100">
			<span class="contact100-form-title-2">
				Feel free to drop me a line below!
			</span>

		<form action="https://formspree.io/hidai25@gmail.com" class="contact100-form validate-form" method="POST">
			<div class="wrap-input100 validate-input" data-validate="Name is required">
				<span class="label-input100">Full Name:</span>
				<input class="input100" type="text" name="name" placeholder="Enter full name"/>
				<span class="focus-input100"></span>
			</div>

			<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
				<span class="label-input100">Email:</span>
				<input class="input100" type="text" name="email" placeholder="Enter email addess"/>
				<span class="focus-input100"></span>
			</div>

			<div class="wrap-input100 validate-input" data-validate="Phone is required">
				<span class="label-input100">Phone:</span>
				<input class="input100" type="text" name="phone" placeholder="Enter phone number"/>
				<span class="focus-input100"></span>
			</div>

			<div class="wrap-input100 validate-input" data-validate = "Message is required">
				<span class="label-input100">Message:</span>
				<textarea class="input100" name="message" placeholder="Your Comment..."></textarea>
				<span class="focus-input100"></span>
			</div>

			<div class="container-contact100-form-btn">
				<button class="contact100-form-btn">
					<span>
						Submit
						<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
					</span>
				</button>
			</div>
 	</form>
  </div>

  <footer class="contact-footer">
  <div class="social">

  <a href="https://www.facebook.com/hidai.barmor" className="facebook social">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a>
  <a href="https://www.youtube.com/"  className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
  </a>

  <a href="https://twitter.com/hidai_barmor" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
  </a>

  <a href="https://www.instagram.com/" className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>
  </div>
  <br/>
  <span class="credit">
  <span class="Copyright">©2020 Copyright: </span> <span class="footername">HIDAI BAR-MOR</span>
  </span>
  </footer>

</GridWrapper>
		);
	}
}
