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
      src: "https://th.bing.com/th/id/OIP.RU7jJQHKt9Ttn1IKQZ1skAHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.gc93l4Nziu9m0_boRRKAvwHaFB?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.FjuGzFgnXt87FcbYyNJxVAHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.ic89ZipBKasdzvsVCvSq1wHaFj?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.7w8dOxA7RSSbT4QbHZXsSwHaFj?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.cYCfmuutKh2x2AGcto-BiQHaFL?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">Swaraj resort</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Station Rd, Forest Colony, Panvel, Navi Mumbai</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 90m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $80 at this property
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
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Conveniently situated in the Panvel part of Mumbai, this property puts you close to attractions and interesting dining options.
              We offer you complete care with trained management. Night-stay with wifi and Television facility and check in directly at counter.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in the Panvel part of Mumbai, this property has an
                excellent location score of 8!
              </span>
              <h2>
                <b>$240</b> (3 nights)
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
