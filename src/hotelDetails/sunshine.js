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
      src: "https://th.bing.com/th/id/OIP.AQiCqQuL4lVo5med6Ghz4gHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.UCwh_nYVb97QM60QRvikKgHaEo?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.g3cHga-WHxxaTjf1ovyiJwHaEo?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.UHpzsMsBJleinpg4LK_qtQHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.fDyiyesOfdvQAkkufXgEMQHaEr?pid=ImgDet&rs=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
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
          <h1 className="hotelTitle">Hotel Sunshine</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>14, Grand Mall, Main Road, Geneva</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $95 at this property and get a free airport taxi
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
              <h1 className="hotelTitle">We care for you.</h1>
              <p className="hotelDesc">
              The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Madurai Main part of Geneva, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Sri Meenakshi Temple. This 3-star property features restaurant to make your stay more indulgent and memorable.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3-night stay!</h1>
              <span>
                Located in Geneva, this property has an
                Amazing location score of 8.7!
              </span>
              <h2>
                <b>$270</b> (3 nights)
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
