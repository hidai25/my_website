import React from "react";
import '../styles';
import '../App.css';
import Fade from 'react-reveal/Fade';
import { Google,Facebook, Twitter } from 'react-sharingbuttons'
import 'react-sharingbuttons/dist/main.css'
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';

export default class Contact extends React.Component {
	render() {
		return (

			<div className="contact">
			   <Navbar fixed="top" />
			<Helmet>
							<style>{'body { background-color: #323f54; }'}</style>
					</Helmet>
			<div id="my-contact" className="container text-center my-5">
			<Fade left>
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				</Fade>
				<form
					className={this.props.shake}
					action="https://formspree.io/example@email.com"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-center text-sm-center">
						<div className="col-8 col-sm-8 col-md-6 mx-auto">
							<button
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>

				<Facebook url={"https://www.facebook.com/hidai.barmor"} />
				      <Twitter url={"https://twitter.com/hidai_barmor"} shareText={"hello"} />
							  <Google url={"www.Google.com"} shareText={"hello"} />


			</div>
			</div>
		);
	}
}

// Contact.propTypes = {
// 	fadeInLeft: PropTypes.string,
// 	shake: PropTypes.string
// };
