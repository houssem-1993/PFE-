import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <ul class="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            
          </ul>

        </div>
  
        <div class="col-xs-6 col-md-3">
          
        </div>
  
        <div class="col-xs-6 col-md-3">
          <h6>Contact</h6>
          <ul class="footer-links">
            <li>Adress:</li>
            <li>E-mail:</li>
            <li>Phone:+21673000000</li>
            <li>Fax:+216000000</li>
            <li><Link href="#">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      {/* <hr> */}
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; Africaine de papiers
       <Link to="/">sap</Link>.
          </p>
        </div>
  
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            
            <li><Link class="facebook" to="#"><i class="fa fa-facebook"></i></Link></li>
            <li><Link class="twitter" to="#"><i class="fa fa-twitter"></i></Link></li>
            <li><Link class="linkedin" to="#"><i class="fa fa-linkedin"></i></Link></li>   
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer
