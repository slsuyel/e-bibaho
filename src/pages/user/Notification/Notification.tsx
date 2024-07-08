const Notification = () => {
  return (
    <div className="py-5">
      <div className="container notifications-container shadow ">
        <div className="row mx-auto header">
          <div className="col-7">
            <p className="title">
              Notifications
              <span className="unread-notifications-number">0</span>
            </p>
          </div>
          <div className="col-5 mark-as-read text-end">
            <a
              href="#"
              id="markAllAsRead"
              className="mark-as-read-button align-middle"
            >
              Mark all as read
            </a>
          </div>
        </div>
        <div className="row notifications">
          <div className="col-12">
            <div className="row single-notification-box read">
              <div className="col-2 profile-picture">
                <img
                  src="https://chadikoberssy.github.io/Notifications-Page-Template/assets/images/avatar-mark-webber.webp"
                  alt="profile picture"
                  className="img-fluid"
                />
              </div>
              <div className="col-10 notification-text">
                <p className="mb-0">
                  <a href="#" className="link name">
                    Mark Webber
                  </a>
                  <span className="description">
                    reacted to your recent post
                  </span>
                  <a className="link" href="http://">
                    My first tournament today!
                  </a>
                </p>
              </div>
            </div>
            <hr />
            <div className="row single-notification-box read">
              <div className="col-2 profile-picture">
                <img
                  src="https://chadikoberssy.github.io/Notifications-Page-Template/assets/images/avatar-mark-webber.webp"
                  alt="profile picture"
                  className="img-fluid"
                />
              </div>
              <div className="col-10 notification-text">
                <p className="mb-0">
                  <a href="#" className="link name">
                    Mark Webber
                  </a>
                  <span className="description">
                    reacted to your recent post
                  </span>
                  <a className="link" href="http://">
                    My first tournament today!
                  </a>
                </p>
              </div>
            </div>
            <hr />
            <div className="row single-notification-box read">
              <div className="col-2 profile-picture">
                <img
                  src="https://chadikoberssy.github.io/Notifications-Page-Template/assets/images/avatar-mark-webber.webp"
                  alt="profile picture"
                  className="img-fluid"
                />
              </div>
              <div className="col-10 notification-text">
                <p className="mb-0">
                  <a href="#" className="link name">
                    Mark Webber
                  </a>
                  <span className="description">
                    reacted to your recent post
                  </span>
                  <a className="link" href="http://">
                    My first tournament today!
                  </a>
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
