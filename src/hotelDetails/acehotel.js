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
import './Modal.css'



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
      src: "https://th.bing.com/th/id/OIP.ZznKetLWoVdkKyDraDiYDAHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://bavarianinn.com/wp-content/uploads/2018/10/Room10_1007_DNL-01FINAL.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/da/24/86/da248685172c7886e1bf843df810f5f2.jpg",
    },
    {
      src: "https://th.bing.com/th/id/OIP.6Smn8v3nC6RGSwWvXkpnRgHaE8?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.Fxl_uCKVWka5rhqbnaI5_wHaEq?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.hxTP-lK5e9HnXu0alJp-LgHaE8?pid=ImgDet&rs=1",
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
          <h1 className="hotelTitle">Ace hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>#11, Narayan Swamy Layout, Opp Manyata Business Park</span>
          </div>
          <span className="hotelDistance">
            150m away from TechPark
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free airport taxi
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
              <h1 className="hotelTitle">Near Manyata TechPark</h1>
              <p className="hotelDesc">
                The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Tachileik part of Tachileik, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Tachileik Airport. As an added bonus, restaurant is provided on-site to conveniently serve your needs.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Located in the real heart of Manyata, this property has an
                excellent location score of 9.6!
              </span>
              <h2>
                <b>$450</b> (5 nights)
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
