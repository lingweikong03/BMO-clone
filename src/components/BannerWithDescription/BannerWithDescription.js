import './BannerWithDecription.css';

function BannerWithDesctiption() {
  return (
    <>
      <div>
        <div className="banner-container">
          <div className="banner-description">
            <h1 className="banner-title">Get up to $1,200<span className="text-sup"><sup>§</sup></span> in value</h1>
            <p className="banner-summary">Live, laugh, save! This includes a 5.50% promo interest rate<a href="https://www.bmo.com/pdf/savings-amplifier-promotional-interest-rate-offer-en.pdf" target="_self">** </a> when you open a chequing and a Savings Amplifier Account.</p>
            <a className="banner-btn" href=''>learn more</a>
          </div>
          <img src='https://www.bmo.com/dist/images/personal/hp-banner/hp-banner-en-desktop-1370x840.webp' />
        </div>
      </div>
    </>
  );
}

export default BannerWithDesctiption;
