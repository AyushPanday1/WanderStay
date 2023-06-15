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
      src: "https://th.bing.com/th/id/OIP.OIqLYDmlO4SLLVvXWBEtFAHaE6?pid=ImgDet&rs=1",
    },
    {
      src: "https://th.bing.com/th/id/OIP.t0fm9hyQk5boWj4eorbTWQHaFj?pid=ImgDet&rs=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://th.bing.com/th/id/R.8defab66f956dd586c67b90c716da45e?rik=xVBjzydY45%2bFQQ&riu=http%3a%2f%2fq-ec.bstatic.com%2fimages%2fhotel%2fmax400%2f187%2f18794367.jpg&ehk=kO5XIyCFaBPBcasaR2vRrV%2fhKuzx%2biB7ujcQPmV67rk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      src: "https://th.bing.com/th/id/OIP.2i4foAVLkVui2bKBAUUCxgHaE8?pid=ImgDet&w=1200&h=801&rs=1",
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
          <h1 className="hotelTitle">Vitara Resort</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>183-02 Jamaica Avenue, John F. Kennedy International Airport, New York (NY), </span>
          </div>
          <span className="hotelDistance">
            Excellent location – 120m from Airport
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $190 at this property and get a free airport taxi
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
              <h1 className="hotelTitle">Stay in 3-star property</h1>
              <p className="hotelDesc">
               
Conveniently situated in the John F. Kennedy International Airport part of New York (NY), this property puts you close to attractions and interesting dining options. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                Out-standing location score of 8.9!
              </span>
              <h2>
                <b>$380</b> (9 nights)
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
