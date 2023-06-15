import React from 'react'
import classes from './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer__addr">
    <h1 class="footer__logo"> WanderStay</h1>
     
          
      <h2>Contact</h2>
      
      <address>
       21, City Palace, Rajasthan, 05644-223992<br />
            
        <a class="footer__btn" href="ayush7426883261@gmail.com">Email Us</a>
      </address>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Services</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="#">Hotel Booking</a>
          </li>
  
          <li>
            <a href="#">Cab booking</a>
          </li>
              
          <li>
            <a href="#">Tour management</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Jungle Safari</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">About Us</h2>
        
        <li class="color">Founded in 2023 in Jaipur, WanderStay has grown from a small startup to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. WanderStay’s mission is to make it easier for everyone to experience the world.
        </li>

        {/* <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Hardware Design</a>
          </li>
          
          <li>
            <a href="#">Software Design</a>
          </li>
          
          <li>
            <a href="#">Digital Signage</a>
          </li>
          
          <li>
            <a href="#">Automation</a>
          </li>
          
          <li>
            <a href="#">Artificial Intelligence</a>
          </li>
          
          <li>
            <a href="#">IoT</a>
          </li>
        </ul> */}
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          
          <li>
            <a href="#">Terms of Use</a>
          </li>
          
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <div class="legal">
      <p>&copy; 2023 WanderStay | All rights reserved.</p>
      
      <div class="legal__links">
        <span> <span class="heart">♥</span>Designed by Ayush Panday.</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer