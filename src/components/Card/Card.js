import './Card.css';

function Card() {
  return (
    <>
      <div>
        <div className='card-section'>
          <div className='card-section-title'>
            <h1>BMO Personal Banking</h1>
            <h2>What can we help you find today?</h2>
          </div>
          <div className='card-section-nav'>
            <ul>
              <li className='nav-item selected'>
                <img alt="" src="https://www.bmo.com/dist/icons/newcommers-offers.svg" />
                <div className='tab-heading'>Featured</div>
              </li>
              <li className='nav-item'>
                <img alt="" src="https://www.bmo.com/dist/icons/bank-account.svg" />
                <div className='tab-heading'>Bank Accounts</div>
              </li>
              <li className='nav-item'>
                <img alt="" src="https://www.bmo.com/dist/icons/credit-card.svg" />
                <div className='tab-heading'>Credit Cards</div>
              </li>
              <li className='nav-item'>
                <img alt="" src="https://www.bmo.com/dist/icons/mortgages-48x48.svg" />
                <div className='tab-heading'>Mortgages</div>
              </li>
              <li className='nav-item'>
                <img alt="" src="https://www.bmo.com/dist/icons/finance-icon-48x48.svg" />
                <div className='tab-heading'>Investments</div>
              </li>
              <li className='nav-item'>
                <img alt="" src="https://www.bmo.com/dist/icons/book-bookmark.svg" />
                <div className='tab-heading'>Learning</div>
              </li>
            </ul>
            <div className='card-section-body'>
              <div className='card-body'>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-grey'>
                      <div className='card-tab-1-img'></div>
                      <div className='card-tab-content'>
                        <h3>Special offers</h3>
                        <p>From everyday banking to credit cards, find ways to save money and make real financial progress</p>
                        <div className='card-tab-link'>
                          <a href=''>explore offers</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-light'>
                      <div className='card-tab-content'>
                        <img className='card-tab-icon' height="60" width="60" alt="" src="https://www.bmo.com/dist/icons/copy-polar.svg" />
                        <h3>Financial resources</h3>
                        <p>Access our financial resource hub to help you manage your money and plan for your future.</p>
                        <div className='card-tab-link'>
                          <a href=''>get started</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-dark'>
                      <div className='card-tab-content'>
                        <img className='card-tab-icon' height="60" width="60" alt="" src="https://www.bmo.com/dist/icons/support-polar.svg" />
                        <h3>BMO online support</h3>
                        <p>The fastest way for you to get support. Start by answering a few questions.</p>
                        <div className='card-tab-link'>
                          <a href=''>get support</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-dark'>
                      <div className='card-tab-content'>
                        <img className='card-tab-icon' height="60" width="60" alt="" src="https://www.bmo.com/dist/icons/newcomers-to-canada-white.svg" />
                        <h3>BMO Newcomer Workforce Integration Lab</h3>
                        <p>We gifted $3 million to help strengthen Canada’s talent pipeline. </p>
                        <div className='card-tab-link'>
                          <a href=''>learn more</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-light'>
                      <div className='card-tab-content'>
                        <img className='card-tab-icon' height="60" width="60" alt="" src="https://www.bmo.com/dist/icons/desktop-monitor-polar.svg" />
                        <h3>Security alerts: Learn what to look for</h3>
                        <p>Identify and learn how you can protect yourself against the different types of fraud.</p>
                        <div className='card-tab-link'>
                          <a href=''>learn more</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-tab-container'>
                  <div className='card-tab'>
                    <div className='card-tab-grey'>
                      <div className='card-tab-2-img'></div>
                      <div className='card-tab-content'>
                        <h3>Thank you for ranking us #1</h3>
                        <p>Award-Winning Customer Satisfaction among the Big 5 Retail Banks.</p>
                        <div className='card-tab-link'>
                          <a href=''>learn more</a>
                          <img name="chevron" className='chevron-right' alt="" src="https://www.bmo.com/dist/icons/chevron.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
