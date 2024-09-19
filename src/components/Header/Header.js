import './Header.css';

function Header() {
  return (
    <div className="BMO-header">
      <div className="BMO-navbar-container">
        <div className="BMO-navbar">
          <ul className="BMO-navbar-section">
            <li className="BMO-navbar-item">Personal</li>
            <li className="BMO-navbar-item">Business</li>
            <li className="BMO-navbar-item">Private Wealth</li>
            <li className="BMO-navbar-item">Commercial</li>
            <li className="BMO-navbar-item">Capital Markets</li>
            <li className="BMO-navbar-item">Global Asset Management</li>
            <li className="BMO-navbar-item">About BMO</li>
          </ul>
          <div className="BMO-search-section">
            <div className="header-search">
              <img src="data:image/svg+xml;charset=utf-8,%3Csvg width='40' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.765 0a6.772 6.772 0 016.764 6.765c0 1.505-.5 2.892-1.334 4.016l3.512 3.512a.999.999 0 11-1.414 1.414l-3.512-3.511a6.72 6.72 0 01-4.016 1.334A6.772 6.772 0 010 6.765 6.772 6.772 0 016.765 0zm0 2A4.77 4.77 0 002 6.765a4.77 4.77 0 004.765 4.765 4.77 4.77 0 004.764-4.765A4.77 4.77 0 006.765 2z' fill='%23646C76'/%3E%3C/svg%3E" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="country-flag">
              <img alt="Flag of Canada" height="25" width="25" src="https://www.bmo.com/dist/icons/flag-header-canada-654x342.svg" />
              <img src="https://www.bmo.com/dist/icons/dropdown-chevron-down-granite.svg" />
            </div>
            <div className="country-lang">
              <span>EN</span>
              <img src="https://www.bmo.com/dist/icons/dropdown-chevron-down-granite.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="BMO-sub-header-container">
        <div className="BMO-sub-header">
          <div className="BMO-sub-navbar-section">
            <a href="https://www.bmo.com/main/personal/bank-accounts" target="_self" className="BMO-logo">
              <img src="https://www.bmo.com/dist/images/logos/bmo-blue-on-transparent-en.svg" alt="Bank of Montreal logo" />
            </a>
            <ul className="BMO-sub-navbar">
              <li>Bank Accounts</li>
              <li>Credit Cards</li>
              <li>Mortgages</li>
              <li>Loans</li>
              <li>Investing</li>
              <li>Insurance</li>
              <li>Offers & Programs</li>
            </ul>
          </div>

          <div className="sign-in-section">
            <button>
              <span className="sign-in-btn">
                <span>
                  <img alt="" height="24" width="24" src="https://www.bmo.com/dist/icons/lock-blue.svg" />
                </span>
                <span className="sign-in-text">Sign In</span>
                <span>
                  <img alt="" height="24" width="24" src="https://www.bmo.com/dist/icons/chevron-down-blue.svg" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
