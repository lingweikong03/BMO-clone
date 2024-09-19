import './CTASection.css';

function CTASection() {
	return (
		<>
			<div className='cta-section-container'>
				<div className='cta-section'>
					<h1>Not sure where to begin? We’ll help you choose</h1>
					<div className='cta-body'>
						<div className='cta-content'>
							<img className='cta-icon' alt='' src='https://www.bmo.com/dist/icons/bank-ic.svg' />
							<h3>Bank accounts</h3>
							<p>Answer a few short questions, and we’ll help you find the right account.</p>
							<div className='cta-link'>
								<a href=''>help us choose</a>
								<img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
							</div>
						</div>
						<div className='cta-content'>
							<img className='cta-icon' alt='' src='https://www.bmo.com/dist/icons/creditcard.svg' />
							<h3>Credit cards</h3>
							<p>From cash back to AIR MILES to rewards, we’ll help you choose the best credit card for you.</p>
							<div className='cta-link'>
								<a href=''>help us choose</a>
								<img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
							</div>
						</div>
						<div className='cta-content'>
							<img className='cta-icon' alt='' src='https://www.bmo.com/dist/icons/ad-trading.svg' />
							<h3>Investments</h3>
							<p>Tell us a bit about yourself, and we’ll find the right investment options for you.
							</p>
							<div className='cta-link'>
								<a href=''>help us choose</a>
								<img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CTASection;
