import { Link, useNavigate } from "react-router-dom";

const Errorpage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate back in the history stack
  };

  const styles = {
    page_404: {
      padding: "40px 0",
      background: "#fff",
      fontFamily: "Arvo, serif",
    },
    four_zero_four_bg: {
      backgroundImage:
        "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
      height: "400px",
      backgroundPosition: "center",
    },
    four_zero_four_heading: { fontSize: "80px" },
    link_404: {
      color: "#fff",
      padding: "10px 20px",
      background: "#39ac31",
      margin: "20px 0",
      display: "inline-block",
    },
    content_box_404: { marginTop: "-50px" },
  };

  return (
    <section style={styles.page_404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 mx-auto col-sm-offset-1 text-center">
              <div style={styles.four_zero_four_bg}>
                <h1
                  className="text-center"
                  style={styles.four_zero_four_heading}
                >
                  404
                </h1>
              </div>

              <div style={styles.content_box_404}>
                <h3 className="h2">Looks like you're lost</h3>
                <p>The page you are looking for is not available!</p>

                <button className="btn-default" onClick={handleGoBack}>
                  Back
                </button>
                <br />
                <Link to={"/"} className="link_404" style={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
