import logo from '../../assets/images/main_logo.png';
import HowWork from '../home/About/HowWork';

const About = () => {
  return (
    <div className=" mt-5">
      <div className="row justify-content-center mx-auto">
        <div className="col-md-10">
          <div className="bg-grad pt-4 text-center">
            <img
              src={logo}
              className="img-fluid "
              alt="Largest Matrimony Service"
              style={{ maxWidth: '250px' }}
            />
            <h2 className="mt-4">Welcome to e-bibaho.com</h2>
          </div>

          <HowWork />

          <div className="mt-4">
            <p>
              e-bibaho.com is an international matrimony website dedicated to
              helping individuals worldwide find their life partners in a secure
              and private environment.
            </p>
            <p>
              Our platform allows members to{' '}
              <a href="/search">search, communicate, interact</a>, and find the
              right person for themselves or their loved ones, facilitating
              marriages across borders and connecting hearts globally.
            </p>
            <p>
              We prioritize informed choices and provide a{' '}
              <a href="/secure">secure environment</a> for finding life
              partners, offering a world-class matrimony service that caters to
              diverse preferences.
            </p>
          </div>

          <div className="mt-4">
            <h3>Our Specialty:</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Global Reach</td>
                  <td>Serving members worldwide</td>
                </tr>
                <tr>
                  <td>Verified Profiles</td>
                  <td>Profiles can be verified for authenticity</td>
                </tr>
                <tr>
                  <td>Private Communication</td>
                  <td>Facilitating private interactions</td>
                </tr>
                <tr>
                  <td>24/7 Access</td>
                  <td>Accessible anytime, anywhere</td>
                </tr>
                <tr>
                  <td>Diverse Categories</td>
                  <td>Offering a wide range of preferences</td>
                </tr>
                <tr>
                  <td>Privacy Assurance</td>
                  <td>Ensuring high-level privacy protection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3>e-bibaho.com at a Glance:</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Our Aim</td>
                  <td>To unite hearts globally</td>
                </tr>
                <tr>
                  <td>Our Mission</td>
                  <td>Making marriages across borders possible</td>
                </tr>
                <tr>
                  <td>Our Scope</td>
                  <td>International community</td>
                </tr>
                <tr>
                  <td>Our Theme</td>
                  <td>Bridging traditions with technology</td>
                </tr>
                <tr>
                  <td>Our Commitment</td>
                  <td>Respecting privacy and security</td>
                </tr>
                <tr>
                  <td>Our Symbol</td>
                  <td>Symbol of union and happiness</td>
                </tr>
                <tr>
                  <td>Our Color</td>
                  <td>Serene and inviting</td>
                </tr>
                <tr>
                  <td>Our Emblem</td>
                  <td>Symbolizing harmony and love</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
