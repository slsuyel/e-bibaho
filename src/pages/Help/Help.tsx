import { Collapse } from "antd";

const { Panel } = Collapse;

const Help = () => {
  return (
    <div className="row mx-auto align-items-center" data-aos="fade-up">
      <div className="col-md-6">
        <img
          src="https://static.vecteezy.com/system/resources/previews/012/706/967/original/need-help-banner-label-badge-flat-icon-megaphone-design-vector.jpg"
          className="img-fluid "
          alt=""
        />
      </div>
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
          {/* Add more panels as needed */}
        </Collapse>
      </div>
    </div>
  );
};

export default Help;
