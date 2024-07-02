import Mediator from '../home/Mediator/Mediator';

const OurMediator = () => {
  return (
    <div className="container my-5">
      <h1>Our Mediator</h1>
      <p>
        Welcome to our mediator services page. We are here to facilitate and
        guide you through your journey to find a perfect match. Our dedicated
        team of mediators ensures:
      </p>
      <ul>
        <li>Personalized matchmaking services tailored to your preferences</li>
        <li>
          Professional guidance and advice throughout the matchmaking process
        </li>
        <li>Confidentiality and trust in handling your information</li>
        <li>Support in resolving any concerns or queries</li>
      </ul>
      <p>
        Whether you are seeking assistance in finding a life partner or need
        help navigating cultural traditions, our mediators are committed to
        making your experience smooth and successful.
      </p>

      <Mediator />
      <p>
        Contact us today to begin your journey towards a meaningful
        relationship.
      </p>
    </div>
  );
};

export default OurMediator;
