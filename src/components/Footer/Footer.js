import './Footer.css';

function Footer() {
	return (
		<>
			<div className='BMO-footer'>
				<div className='cdic-section'>
					<div className='icon-container'>
						<a href="https://www.cdic.ca/depositors/list-of-members/" target="_blank">
							<img alt="" src="https://www.bmo.com/dist/icons/cdic.svg" />
						</a>
						<a href="https://www.cdic.ca/depositors/list-of-members/" target="_blank">
							<img alt="" src="https://www.bmo.com/dist/icons/cdic-online-badge.svg" />
						</a>
					</div>
					<p className='cdic-content'>We are members of the <a href="https://www.bmo.com/main/personal/cdic/" target="_blank">Canada Deposit Insurance Corporation (CDIC)</a></p>
				</div>
				<div className='explore-section'>
					<div className='lists-container'>
						<div className='explore-list'>
							<h2>Explore our services</h2>
							<ul>
								<li><a>Bank Accounts</a></li>
								<li><a>Credit Card</a></li>
								<li><a>Mortgages</a></li>
								<li><a>Loans</a></li>
								<li><a>Investments</a></li>
								<li><a>Creditor Insurance</a></li>
								<li><a>Travel Insurance</a></li>
							</ul>
						</div>
						<div className='explore-list'>
							<h2>Security Centre</h2>
							<ul>
								<li><a>How We Protect You</a></li>
								<li><a>How to Protect Yourself</a></li>
								<li><a>Security Tips</a></li>
								<li><a>Learning Centre</a></li>
								<li><a>Report Fraud</a></li>
								<li><a>Report Lost/Stolen Debit Card</a></li>
								<li><a>Report Lost/Stolen Credit Card</a></li>
								<li><a>Security Alerts</a></li>
							</ul>
						</div>
						<div className='explore-list'>
							<h2>Ways to Bank</h2>
							<ul>
								<li><a>Overview</a></li>
								<li><a>Register for Online Banking</a></li>
								<li><a>Digital Banking</a></li>
								<li><a>Deposit Money</a></li>
								<li><a>Request Money</a></li>
								<li><a>Transfer Money</a></li>
								<li><a>Send Money</a></li>
							</ul>
						</div>
						<div className='explore-list'>
							<h2 className='empty-title'></h2>
							<ul>
								<li><a>Global Money Transfer</a></li>
								<li><a>Pay Bills</a></li>
								<li><a>BMO Debit Card</a></li>
								<li><a>Overdraft Protection</a></li>
								<li><a>CRA Direct Deposit</a></li>
								<li><a>Digital Demos</a></li>
								<li><a>BMO Alerts</a></li>
							</ul>
						</div>
						<div className='explore-list'>
							<div className='apple-download-icon'>
								<a href="https://apps.apple.com/ca/app/bmo-mobile-banking/id429080319" target="_blank">
									<img alt="" src="https://www.bmo.com/dist/icons/apple-app-button-120x40.svg" />
								</a>
							</div>
							<div>
								<a href="https://play.google.com/store/apps/details?id=com.bmo.mobile" target="_blank">
									<img alt="" src="https://www.bmo.com/dist/icons/google-app-button-135x40.svg" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='social-media-section'>
					<div className='social-media-container'>
						<div className='social-media-text'>
							<div className=''>
								<a href='' className='text'>
									<img alt='' src='https://www.bmo.com/dist/icons/footer-sticky-support-white.svg' />
									<p>Customer support</p>
								</a>
							</div>
							<div className=''>
								<a href='' className='text'>
									<img alt='' src='https://www.bmo.com/dist/icons/footer-sticky-branches-white.svg' />
									<p>Branch locator</p>
								</a>
							</div>
							<div className=''>
								<a href='' className='text'>
									<img alt='' src='https://www.bmo.com/dist/icons/footer-sticky-appointment-white.svg' />
									<p>Book an appointment</p>
								</a>
							</div>
						</div>
						<div className='social-media-icons'>
							<a href='' className='icon'>
								<img alt='' src='https://www.bmo.com/dist/icons/youtube-footer.svg' />
							</a>
							<a href='' className='icon'>
								<img alt='' src='https://www.bmo.com/dist/icons/twitter-footer.svg' />
							</a>
							<a href='' className='icon'>
								<img alt='' src='https://www.bmo.com/dist/icons/facebook-footer.svg' />
							</a>
							<a href='' className='icon'>
								<img alt='' src='https://www.bmo.com/dist/icons/linkedin-footer.svg' />
							</a>
							<a href='' className='icon'>
								<img alt='' src='https://www.bmo.com/dist/icons/instagram-footer.svg' />
							</a>
						</div>
					</div>
				</div>
				<div className='bottom-section'>
					<div className='bottom-container'>
						<div className='quick-links'>
							<a href=''>About BMO</a>
							<a href=''>Investor Relations</a>
							<a href=''>Privacy</a>
							<a href=''>Legal</a>
							<a href=''>Modern Slavery Act Statement</a>
							<a href=''>Careers</a>
							<a href=''>Accessibility at BMO</a>
							<a href=''>Accessibility Feedback</a>
							<a href=''>Site map</a>
							<a href=''>Customer Complaint Handling Process</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer;
