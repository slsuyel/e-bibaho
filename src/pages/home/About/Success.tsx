import img1 from '../../../assets/images/success/1.jpg';

import img2 from '../../../assets/images/success/new_suss.jpeg';
import img3 from '../../../assets/images/success/3.jpg';
import img4 from '../../../assets/images/success/444.jpg';
import img5 from '../../../assets/images/success/5555.jpg';

const Success = () => {
  const data = [
    {
      title: ' Rahim & Tasnim',
      date: 'January 03,2024      ',
      content:
        "Hello, it's Rahim here! I was browsing Ebibah  from my New York apartment when I found Tasnim from Dhaka. Her profile, filled with traditional tunes and vibrant smiles, drew me in. We shared dreams and music late into the night, leading me to visit her. Our engagement is a testament to Ebibah 's magic in connecting souls across continents.",
      imageSrc: img1,
    },
    {
      title: 'Nafis & Farhana',
      date: 'February 08,2024',
      content:
        "Hi, I'm Nafis from LA! On Ebibah , I met Farhana from Chittagong. Our chats started with recipes and evolved into a culinary adventure. Flying to meet her confirmed our bond, and Ebibah  played a key role in turning our chats into a real-life fairy tale of flavors and love.",
      imageSrc: img2,
    },
    {
      title: ' Samir & Ayesha',
      date: 'April 12,2024      ',
      content:
        "I'm Samir, an architect from Dhaka. Ayesha and I met on Ebibah , and our shared vision of designing a home turned into planning a life together. Our proposal was as intimate as our chats. Ebibah  helped us build a foundation for a wedding that mirrors our simple, profound love.",
      imageSrc: img3,
    },
    {
      title: 'Asif & Meher',
      date: 'April 17,2024      ',
      content:
        "This is Asif, a writer from Chicago. Meher's art on her Ebibah  profile from Sylhet captivated me. Our deep conversations about art and life made meeting her a blend of two worlds. Thanks to Ebibah , we're crafting a wedding as unique as our story",
      imageSrc: img5,
    },
    {
      title: 'Imran & Sabrina',
      date: 'May 09,2024',
      content:
        "Hey, I'm Imran from Khulna. Finding Sabrina on Ebibah  was like finding a treasure. Our love for literature turned into endless book discussions. Meeting felt like reconnecting with an old friend. Our engagement and future, facilitated by Ebibah , promise a life rich with books and joy",
      imageSrc: img4,
    },
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="my-5">
      <h1 className="text-center text-capitalize ">
        Our most recent{' '}
        <span className="fw-medium text-info-emphasis ">success stories </span>
      </h1>

      <div className="container-fluid  my-5 mx-auto px-2 stack">
        {data.map((item, index) => (
          <div key={index} className="row mx-2 stack__card my-5 ">
            <div className="col-md-6 text-white ">
              <div className="p-3">
                <h2 className="">{item.title}</h2>
                <div className="d-flex fs-5 justify-content-between mb-3 px-1 ">
                  <p className="my-0 fs-6">
                    <i className="fa-regular fa-calendar-days"></i> {item.date}
                  </p>
                </div>
                <br />
                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: '26px',
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
            <div className="col-md-6 p-0 " key={index}>
              <img
                className="img-fluid "
                // height={350}
                // width={600}
                src={item.imageSrc}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
