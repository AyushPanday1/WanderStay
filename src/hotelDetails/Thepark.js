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
      src: "https://th.bing.com/th/id/R.3b317a6f271b6a47aa5910ed73108f0c?rik=auRuUj6zwYoX2w&riu=http%3a%2f%2fwww.hotelvitabella.com%2fimg%2fodalar.jpg&ehk=7ldcDJ3W9HuLzSwat9qGMCP71i0P3X01ujY4GRVwrqk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      src: "https://www.ledsmaster.com/wp-content/uploads/2018/04/20180207210359.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.vuErQcx8lKSFtSDNWrY0FgHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.053RcGO0Pmt97gb0Eh-9RwHaEK?pid=ImgDet&w=960&h=540&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.mGEqTL7Ab2BT3vyiBj4BOgHaE7?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">The park</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>215 West 94Th Street, Upper West Side</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 50m from Road
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free dinner cuisine
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
              <h1 className="hotelTitle">Start your trip with us!</h1>
              <p className="hotelDesc">
               
Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Upper West Side part of New York (NY), this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Central Park. As an added bonus, fitness center is provided on-site to conveniently serve your needs.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9!
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
