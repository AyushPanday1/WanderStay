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
      src: "https://i.pinimg.com/originals/24/46/0f/24460f40907275515a8f93bbaf076125.png",
    },
    {
      src: "https://i.pinimg.com/originals/1a/33/59/1a3359319c1fd3a3b61b134d1fa1c82a.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.U17nlHoLxMWOcPxIYJUI-wHaFj?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.Xr-gFeYvi8owfOj4BcGDPQHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.16xMGsN-8bBS9n3dZmeOgAHaE9?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.hLAGGy3T1PR55IP1_R9m_QHaE7?pid=ImgDet&w=1024&h=682&rs=1",
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
          <h1 className="hotelTitle">Sun & Star</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>10-74 Beach 22nd Street, Las vegas</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from Highway.
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property.
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
              <h1 className="hotelTitle">Nearest to the airport</h1>
              <p className="hotelDesc">
               
Conveniently situated in the International Airport part of New York (NY), this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Central Park. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                Amazing location score of 8!
              </span>
              <h2>
                <b>$500</b> (5 nights)
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
