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
      src: "https://th.bing.com/th/id/OIP.0kWkJRAx9tiSiIApf7g8GgHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Gurgaon/hotel-haut-monde/dp3.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.vdPKwBHwgFykWgnum4Ve3wHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.JVPfxFS1NZj4iWfgK6sWWQHaFH?pid=ImgDet&rs=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.y1MOLDEWDSz_lxOLyVBlXgAAAA?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">Hotel Om complex</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>10th Street MCN Nagar MCN Nagar, Old Mahabalipuram Road & East Coast Road, Chennai,</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 200m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $80 at this property.
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
              <h1 className="hotelTitle">Stay in the Western Side of City</h1>
              <p className="hotelDesc">
                Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Old Mahabalipuram Road & East Coast Road part of Chennai, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Marina Beach. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in Western Part of city, this property has an
                excellent location score of 9!
              </span>
              <h2>
                <b>$370</b> (5 nights)
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
