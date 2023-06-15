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
      src: "https://th.bing.com/th/id/OIP.cEa30HBxL3Wr6OlyamAXkQHaFj?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.mGEqTL7Ab2BT3vyiBj4BOgHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.92JpLMJp_zhSgyvl0Ai9XgHaFe?pid=ImgDet&w=1024&h=757&rs=1",
    },
    {
      src: "https://i.pinimg.com/originals/06/81/87/068187bce3e14d33bd6af200d923973b.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.kWcunnej2ZLVpwBvJziY1wHaE-?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/R.3b317a6f271b6a47aa5910ed73108f0c?rik=auRuUj6zwYoX2w&riu=http%3a%2f%2fwww.hotelvitabella.com%2fimg%2fodalar.jpg&ehk=7ldcDJ3W9HuLzSwat9qGMCP71i0P3X01ujY4GRVwrqk%3d&risl=&pid=ImgRaw&r=0",
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
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $112 at this property and get a free airport taxi
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
              The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Agrahara, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Mysore Maharajah's Palace (Amba Vilas). Massage and restaurant are among the special facilities that will enhance your stay with on-site convenience.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
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
