import "./hotel.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const Modal = () => {


    const MyModal = () => {
      return (
        <>
          <div className="modal-wrapper" onClick={() => setShowModal(false)}></div>
          <div className="modal-container">
            <h2>Get extra discount on counter with coupon WS200Off!!</h2>
            <p className="p">Your room has been booked.</p>
            <p className="p">
            Refer to your friends and get upto 5% cashback on WanderStay payments.
            </p>
            <a href='/Home'><button className="reserve" onClick={() => setShowModal(false)}>Done✅</button></a>
          </div>
        </>

      )
    }

    return (
      <>
        <button onClick={() => setShowModal(true)}>Click me</button>
        {showModal && <MyModal />}
      </>
    )
  }

  const photos = [
    {
      src: "https://th.bing.com/th/id/OIP.5mw7HVRgN8p8jfsMmS6wcQHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.qgKzhfnizWeCWuA2eYisgAHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.FrBNfWjBpNvWqoX1so5CHwHaE4?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.VJKCWoNH1YuNnPAgs2xVUwHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://images.trvl-media.com/hotels/14000000/13380000/13379500/13379419/fbc46499.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
    },
    {
      src: "https://th.bing.com/th/id/R.23de306842291959bebfe895814aa936?rik=3hsMKFSsJjTr1Q&riu=http%3a%2f%2fwww.leisureopportunities.co.uk%2fimages%2fHIGH27353_511305.jpg&ehk=Xl5N%2fmzy%2fEXHbaXrp6eRABHz3LYXPN2jo5QH7kRiinc%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Golden Cherry</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>ArrkazarYon street , Sansai (B) Ward, Tachileik, Tachileik, Myanmar, 11101 </span>
          </div>
          <span className="hotelDistance">
            125m away from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $112 at this property and get a free taxi to pick you up
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">The center of City</h1>
              <p className="hotelDesc">
                 The car parking and the Wi-Fi are always free,
                 so you can stay in touch and come and go as you please. 
                 Conveniently situated in the Tachileik part of Tachileik, 
                 this property puts you close to attractions and interesting dining options.
                 Don't leave before paying a visit to the famous Tachileik Airport. 
                 As an added bonus, restaurant is provided on-site to conveniently serve your needs.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-day tour of paris</h1>
              <span>
                Located in the center of city, this property has an
                Awesome location score of 8.9!
              </span>
              <h2>
                <b>$505</b> (5 nights)
              </h2>
              <button onClick={() => setShowModal(true)}>Reserve or Book Now!</button>
              {showModal && <Modal />}
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
