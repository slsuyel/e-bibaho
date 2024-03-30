import { Slider } from "antd";
import { useState, useEffect, ChangeEvent } from "react";
import { Accordion, Form } from "react-bootstrap";

const FilterBox = () => {
  const [gender, setGender] = useState<string>("male");
  const [age, setAge] = useState<number>(18);
  const [height, setHeight] = useState("4'0\"");

  const [division, setDivision] = useState<string>("All Division");
  const [education, setEducation] = useState<{ [key: string]: boolean }>({
    all: false,
    doctorate: false,
    professional: false,
  });
  const [professionalArea, setProfessionalArea] = useState<{
    [key: string]: boolean;
  }>({ all: false, doctorate: false, professional: false });
  const [workingSector, setWorkingSector] = useState<{
    [key: string]: boolean;
  }>({ all: false, doctorate: false, professional: false });
  const [livingCountry, setLivingCountry] = useState<{
    [key: string]: boolean;
  }>({ all: false, doctorate: false, professional: false });

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  const handleAgeChange = (value: number) => {
    setAge(value); // Update the age state with the new value
  };

  const handleHeightChange = (value: number) => {
    const totalInches = value / 2.54; // Convert centimeters to inches (1 inch = 2.54 centimeters)
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    setHeight(`${feet}'${inches}"`); // Update the height state with the formatted string
  };

  const handleDivisionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDivision(event.target.value);
  };
  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
  ) => {
    const { id, checked } = event.target;
    setState((prev) => ({ ...prev, [id]: checked }));
  };

  useEffect(() => {
    console.log({
      gender,
      age,
      height,
      division,
      education,
      professionalArea,
      workingSector,
      livingCountry,
    });
  }, [
    gender,
    age,
    height,
    division,
    education,
    professionalArea,
    workingSector,
    livingCountry,
  ]);

  return (
    <div>
      <Accordion className="mb-1" defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="pe-1">Gender</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-around">
              <div className="align-items-center d-flex gap-1">
                <i className="fa-solid fa-person"></i>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="male"> Male</label>
              </div>
              <div className="align-items-center d-flex gap-1">
                <i className="fa-solid fa-child-dress"></i>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <Accordion className="mb-1" defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header className="pe-1">Age </Accordion.Header>
          <Accordion.Body>
            <span>{age}</span>
            <Form.Range min={18} max={80} onChange={handleAgeChange} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}

      <Accordion className="mb-1" defaultActiveKey="2">
        <Accordion.Item eventKey="2">
          <Accordion.Header className="pe-1">Age </Accordion.Header>
          <Accordion.Body>
            <span>{age}</span>
            <Slider min={18} max={80} onChange={handleAgeChange} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="3">
        <Accordion.Item eventKey="3">
          <Accordion.Header className="pe-1">Height</Accordion.Header>
          <Accordion.Body>
            <span>{height}</span>
            <Slider min={123} max={250} onChange={handleHeightChange} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="4">
        <Accordion.Item eventKey="4">
          <Accordion.Header className="pe-1">Home Division</Accordion.Header>
          <Accordion.Body>
            <Form.Select
              aria-label="Default select example"
              className="rounded-0"
              onChange={handleDivisionChange}
            >
              <option>All Division</option>
              <option value="1">Dhaka</option>
              <option value="2">Rangpur</option>
              <option value="3">Sylhet</option>
            </Form.Select>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="5">
        <Accordion.Item eventKey="5">
          <Accordion.Header className="pe-1">Education</Accordion.Header>
          <Accordion.Body>
            <Form>
              <div>
                <Form.Check
                  type="checkbox"
                  id="all"
                  label="All"
                  onChange={(e) => handleCheckboxChange(e, setEducation)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="doctorate"
                  label="Doctorate / Phd / MPhil"
                  onChange={(e) => handleCheckboxChange(e, setEducation)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="professional"
                  label="Professional Degree"
                  onChange={(e) => handleCheckboxChange(e, setEducation)}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="6">
        <Accordion.Item eventKey="6">
          <Accordion.Header className="pe-1">
            Professional Area
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <div>
                <Form.Check
                  type="checkbox"
                  id="all"
                  label="All"
                  onChange={(e) => handleCheckboxChange(e, setProfessionalArea)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="doctorate"
                  label="Doctorate / Phd / MPhil"
                  onChange={(e) => handleCheckboxChange(e, setProfessionalArea)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="professional"
                  label="Professional Degree"
                  onChange={(e) => handleCheckboxChange(e, setProfessionalArea)}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="7">
        <Accordion.Item eventKey="7">
          <Accordion.Header className="pe-1">Working Sector</Accordion.Header>
          <Accordion.Body>
            <Form>
              <div>
                <Form.Check
                  type="checkbox"
                  id="all"
                  label="All"
                  onChange={(e) => handleCheckboxChange(e, setWorkingSector)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="doctorate"
                  label="Doctorate / Phd / MPhil"
                  onChange={(e) => handleCheckboxChange(e, setWorkingSector)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="professional"
                  label="Professional Degree"
                  onChange={(e) => handleCheckboxChange(e, setWorkingSector)}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="mb-1" defaultActiveKey="8">
        <Accordion.Item eventKey="8">
          <Accordion.Header className="pe-1">Living Country</Accordion.Header>
          <Accordion.Body>
            <Form>
              <div>
                <Form.Check
                  type="checkbox"
                  id="all"
                  label="All"
                  onChange={(e) => handleCheckboxChange(e, setLivingCountry)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="doctorate"
                  label="Doctorate / Phd / MPhil"
                  onChange={(e) => handleCheckboxChange(e, setLivingCountry)}
                />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  id="professional"
                  label="Professional Degree"
                  onChange={(e) => handleCheckboxChange(e, setLivingCountry)}
                />
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterBox;
