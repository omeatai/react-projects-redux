const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Experience budget-friendly adventures with our exclusive deals and
              cost-effective travel packages, ensuring you get the most out of
              your journey without breaking the bank.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Discover the thrill of the great outdoors with our diverse range
              of hiking excursions, from scenic strolls to challenging treks,
              tailored to cater to all levels of adventurers.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks fa-fw"></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Indulge in unparalleled luxury during your travels with our
              carefully selected accommodations and VIP treatment, ensuring that
              every moment of your trip is as comfortable as it is
              unforgettable.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
