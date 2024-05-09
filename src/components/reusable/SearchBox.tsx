import { Button } from "antd";

import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  return (
    <div className="row search-box mx-auto font-maven fw-medium">
      <div className="mb-5">
        <div className="bg-white col-md-10 mx-auto p-4  rounded row shadow-lg">
          <h1 className="font-maven mb-4 mt-1 text-center ">
            Find Your
            <span className="fw-medium text-info-emphasis "> Soulmate</span>
          </h1>
          <div className="col-md-2">
            <div className="form-group my-1">
              <input
                type="hidden"
                name="page_name"
                defaultValue="profession_search"
              />
              <label className="control-label text-info-emphasis">
                Looking For
              </label>
              <select
                name="looking_for"
                id="looking_id"
                className="form-control"
              >
                <option value={0}>Bride</option>
                <option value={1}>Groom</option>
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">
                Religion
              </label>
              <select name="religion" id="community" className="form-control">
                <option value={1}>Muslim</option>
                <option value={2}>Hindu</option>
                <option value={3}>Christian</option>
                <option value={4}>Buddhist</option>
                <option value={5}>Spiritual</option>
                <option value={6}>Bahai</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">
                Marital Status
              </label>
              <select name="marital[]" id="marital" className="form-control">
                <option value={1}>Never Married</option>
                <option value={2}>Widowed</option>
                <option value={3}>Awaiting Divorce</option>
                <option value={4}>Annulled</option>
                <option value={5}>Divorced</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">
                Age from
              </label>
              <select id="marital" className="form-control">
                {[...Array(80 - 19)].map((_, index) => (
                  <option key={index + 19}>{index + 19}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">Age to</label>
              <select id="marital" className="form-control">
                {[...Array(80 - 19)].map((_, index) => (
                  <option key={index + 19}>{index + 19}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <br />
            <Button
              onClick={() => navigate("/search-res")}
              style={{ height: "40px" }}
              className="d-flex py-3 text-white align-items-center  bg-danger text-white"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

// import { Button, Form, Select, Input } from "antd";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const { Option } = Select;

// const SearchBox = () => {
//   const navigate = useNavigate();
//   const [counties, setCounties] = useState([]);

//   useEffect(() => {
//     fetch("./countries.json")
//       .then((res) => res.json())
//       .then((data) => setCounties(data));
//   }, []);

//   const onFinish = (values) => {
//     console.log("Received values:", values);
//     navigate("/search-res");
//   };

//   return (
//     <div className="row search-box mx-auto font-maven fw-medium">
//       <div className="mb-5">
//         <div className="bg-white col-md-10 mx-auto p-4  rounded row shadow-lg">
//           <h1 className="font-maven mb-4 mt-1 text-center ">
//             Find Your
//             <span className="fw-medium text-info-emphasis "> Soulmate</span>
//           </h1>
//           <Form
//             name="searchForm"
//             layout="vertical"
//             onFinish={onFinish}
//             className="row g-3"
//           >
//             <Form.Item
//               label="Looking For"
//               name="looking_for"
//               className="col-md-2"
//             >
//               <Select placeholder="Looking for">
//                 <Option value={0}>Bride</Option>
//                 <Option value={1}>Groom</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="Country" name="country" className="col-md-2">
//               <Select showSearch placeholder="Select  country">
//                 {counties.map((country) => (
//                   <Option key={country} value={country}>
//                     {country}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>
//             <Form.Item
//               label="Marital Status"
//               name="marital_status"
//               className="col-md-2"
//             >
//               <Select placeholder="Select marital status">
//                 <Option value={1}>Never Married</Option>
//                 <Option value={2}>Widowed</Option>
//                 <Option value={3}>Awaiting Divorce</Option>
//                 <Option value={4}>Annulled</Option>
//                 <Option value={5}>Divorced</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="Age From" name="age_from" className="col-md-2">
//               <Input type="number" placeholder="Age from" />
//             </Form.Item>
//             <Form.Item label="Age To" name="age_to" className="col-md-2">
//               <Input type="number" placeholder="Age to" />
//             </Form.Item>

//             <Form.Item className="col-md-2">
//               <br />
//               <Button
//                 htmlType="submit"
//                 style={{ height: "40px" }}
//                 className="d-flex py-3 text-white align-items-center  bg-danger text-white"
//               >
//                 Search
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;
