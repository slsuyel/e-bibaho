const MyContact = () => {
  return (
    <>
      <div className="user-d-border p-0" id="partner-preferences">
        <div className="bg-red-500 py-2 ">
          <h5 className="m-0 ps-2 text-secondary"> My Contact detail</h5>
        </div>

        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary ">Mobile</td>
                <td>: 01722597565</td>
              </tr>
              <tr>
                <td className="text-secondary ">Email</td>
                <td>: slsuyel@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyContact;
