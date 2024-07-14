import { Collapse } from 'antd';

const { Panel } = Collapse;

const Help = () => {
  return (
    <div
      className="row mx-auto align-items-center contact_us_pg container my-5"
      data-aos="fade-up"
    >
      <section className="footer_get_touch_outer mb-5">
        <div className="footer_get_touch_inner row mx-auto">
          <div className=" get_form col-md-8">
            <div className="get_form_inner">
              <div className="get_form_inner_text">
                <h3>Get In Touch</h3>
              </div>
              <form action="#">
                <div className="grid-50-50">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone/Skype" />
                </div>
                <div className="grid-full">
                  <textarea
                    placeholder="Message"
                    cols={30}
                    rows={10}
                    defaultValue={''}
                  />
                </div>
                <button className="btn-default">Submit</button>
              </form>
            </div>
          </div>
          <div className="colmun-30 get_say_form col-md-4">
            <h5>Say Hi!</h5>
            <ul className="get_say_info_sec">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:">info@ebibah.com</a>
              </li>
              <li>
                <i className="fa fa-whatsapp" />
                <a href="tel:">+91 9602381997</a>
              </li>
              <li>
                <i className="fa fa-skype" />
                <a href="#">ebibah</a>
              </li>
            </ul>
            <ul className="get_say_social-icn">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="col-md-6">
        <Collapse accordion>
          <Panel header="Question 1" key="1">
            <p>Answer to question 1</p>
          </Panel>
          <Panel header="Question 2" key="2">
            <p>Answer to question 2</p>
          </Panel>
          <Panel header="Question 3" key="3">
            <p>Answer to question 3</p>
          </Panel>
        </Collapse>
      </div>{' '}
      <div className="col-md-6">
        <Collapse accordion>
          <Panel header="Question 1" key="1">
            <p>Answer to question 1</p>
          </Panel>
          <Panel header="Question 2" key="2">
            <p>Answer to question 2</p>
          </Panel>
          <Panel header="Question 3" key="3">
            <p>Answer to question 3</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Help;
