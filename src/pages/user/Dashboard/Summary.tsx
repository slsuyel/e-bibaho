const Summary = () => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fas fa-money-bill-alt fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold">Total Balance</h5>
                <p className="card-text fs-4 mb-0">৳132996</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fa-solid fa-message fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold">SMS Balance</h5>
                <p className="card-text fs-4 mb-0">৳136</p>
              </div>
            </div>
          </div>
        </div>
        {/* <i class="fa-solid fa-message"></i> */}
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fa-solid fa-chalkboard-user fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold">Total Staffs</h5>
                <p className="card-text fs-4 mb-0">26</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fa-solid fa-people-roof fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold">Students</h5>
                <p className="card-text fs-4 mb-0">500</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fa-solid fa-user-plus fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold"> Applications</h5>
                <p className="card-text fs-4 mb-0">396</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-1">
          <div className="border-0 card hov-card mb-2 py-3 shadow-sm">
            <div className="card-body d-flex align-item-center justify-content-around">
              <i className="p-3 rounded-circle my-auto fa-solid fa-users fs-1"></i>
              <div className="text-end">
                <h5 className="card-title fw-bold">Visitors</h5>
                <p className="card-text fs-4 mb-0">2996</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
