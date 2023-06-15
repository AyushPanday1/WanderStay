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
      src: "https://th.bing.com/th/id/OIP.78eR-rUOymkuf6tf3dHqVAHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP._CXp8SlmXjr8oGZKIv2jmgHaEo?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.qLVYj_t-HU2Yyx3v_wFgLwHaE6?pid=ImgDet&rs=1",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/08/18/77/1b/hansar-bangkok.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.QTDo3JxNe99M9tUoxwJRegHaE7?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">Aura Stays</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>170 Broadway, Financial District, New York (NY), United States, 10007</span>
          </div>
          <span className="hotelDistance">
            On a distance of – 390m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $150 at this property
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
              Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Financial District part of New York (NY), this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Central Park. Rated with 3.5 stars, this high-quality property provides guests with access to restaurant, fitness center and spa on-site.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay and travel!</h1>
              <span>
                Located in New-york, this property has an
                Fabulous location score of 9.6!
              </span>
              <h2>
                <b>$1000</b> (7-nights)
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
