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
      src: "https://th.bing.com/th/id/OIP.n1JvQPWHnIsWGRaL36EeKQHaET?pid=ImgDet&rs=1",
    },
    {
      src: "https://3.imimg.com/data3/KX/TE/MY-13990686/images-gallery-img7-1000x1000.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.vUXd_RBx9NsiO5AX-o51IgHaE7?pid=ImgDet&rs=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://th.bing.com/th/id/R.3e57fd00daec1d503a42e188673f6e02?rik=dRFIuH4lSzbmEQ&riu=http%3a%2f%2fwww.dom-wnetrze.com%2fwp-content%2fuploads%2f2015%2f05%2fmg-5481-1200x900-cm-resize.jpg&ehk=zEXaVyosvWySBO6fWrWPSUoqbtH8Ugpr5Afv923rflk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      src: "https://th.bing.com/th/id/OIP.B-aNkpY6QYijy_-Fqqx_5wHaE-?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">RDB stays</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>AA-36, Block AA36 new town Rajarhat,</span>
          </div>
          <span className="hotelDistance">
            On a distance of – 225m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $90 at this property and get a free taxi & dinner.
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
              <h1 className="hotelTitle">Best Stay in the City.</h1>
              <p className="hotelDesc">
               
Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Salt Lake part of Kolkata, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Victoria Memorial. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for one-night stay!</h1>
              <span>
                This property has an
                Fabulous location score of 9.2!
              </span>
              <h2>
                <b>$90</b> (1 night)
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
