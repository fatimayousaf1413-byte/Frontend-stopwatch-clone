import React from 'react'
import './Footer.css'
import main from '../../../assets/copymain.png'
import facebook from '../../../assets/facebook.svg'
import youtube from '../../../assets/youtube.svg'
import twiter from '../../../assets/twiter.svg'
import linkdin from '../../../assets/linkdin.svg'
import snapchat from '../../../assets/snapchat.svg'
import pinterest from '../../../assets/pinterest.svg'
import instagram from '../../../assets/instagram.svg'
import tiktok from '../../../assets/tiktok.svg'

const Footer = () => {
    return (
        <div className='all' >
            <hr className='hr' />
            <div className='footer' >
                <div className='h3tag'>
                    <h3>Smart Watches</h3>
                </div>
                <div className='branch' >
                    <div className='types' >
                        <h4>Best Smart Watches</h4>
                        <p>Andriod Smart Watches</p>
                        <p>Top 10 Smart Watches in Pakistan</p>
                        <p>Luxury Smart Watches</p>
                        <p>Affordable Smart Watches</p>
                    </div>
                    <div className='types' >
                        <h4>Shop By Geneder</h4>
                        <p>Smart Watches for Women</p>
                        <p>Smart Watches for Men</p>
                        <p>Smart Watches for Kids</p>
                    </div>
                    <div className='types' >
                        <h4>Shop By Features</h4>
                        <p>Best Calling Smart Watches</p>
                        <p>Water Proof Smart Watches</p>
                        <p>AMOLD Display Smart Watches</p>
                        <p>Black Smart Watches</p>
                        <p>White Smart Watches</p>
                        <p>Sports Watches</p>
                        <p>Round Dial Smart Watchse</p>
                        <p>Smart Watch Chain</p>
                    </div>
                    <div className='types' >
                        <h4>Shop By Price</h4>
                        <p>Smart Watches Under 5500</p>
                        <p>Smart Watches Under 6000</p>
                        <p>Smart Watches Under 7000</p>
                        <p>Smart Watches Under 8000</p>
                        <p>Smart Watches Under 9000</p>
                        <p>Smart Watches Under 10000</p>
                        <p>Smart Watches Under 12000</p>
                        <p>Smart Watches Under 13000</p>
                    </div>
                </div >
                <div className='h3tag' >
                    <h3>Wireless Earbuds</h3>
                </div>
                <div className='branch'>
                    <div className='types' >
                        <h4>Best Earbuds</h4>
                        <p>Noise Cancelling Earbuds</p>
                        <p>Gaming Earbuds</p>
                        <p>Best Budget Earbuds</p>
                    </div>
                    <div className='types' >
                        <h4>Shop By Feature</h4>
                        <p>Andriod Earbuds</p>
                        <p>Earbuds for Calls</p>
                    </div>
                    <div className='types' >
                        <h4>Wireless Earbuds</h4>
                        <p>Wireles Supports Earbuds</p>
                        <p>Wireless Swimming Earbuds</p>
                        <p>Wireless Earbuds</p>
                    </div>
                </div>
            </div>
            <hr className='hr' />


            <footer class="header ">
                <div class="container">
                    <div class="footer__inner">
                        <div class="footer__item footer__item--image">
                            <img src={main}
                                alt=""
                                class="footer__image" />
                        </div>
                        <div class="footer__item">
                            <p class="footer__item-title">Quick Links</p>
                            <div class="footer__item-content">
                                <ul class="linklist">
                                    <li class="linklist__item ">Home</li>
                                    <li class="linklist__item">Smart Watches</li>
                                    <li class="linklist__item">Ear Buds</li>
                                    <li class="linklist__item">Men Smartwatches</li>
                                    <li class="linklist__item">Women Smartwatches</li>
                                    <li class="linklist__item">Sports Smartwatches</li>
                                    <li class="linklist__item">Blogs</li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer__item">
                            <p class="footer__item-title">Support</p>
                            <div class="footer__item-content">
                                <ul class="linklist">
                                    <li class="linklist__item">FAQs</li>
                                    <li class="linklist__item">Track Your Order</li>
                                    <li class="linklist__item">Warranty Registration</li>
                                    <li class="linklist__item">Shipping Details</li>
                                    <li class="linklist__item">Terms & Conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer__item">
                            <p class="footer__item-title">Policy</p>
                            <div class="footer__item-content">
                                <ul class="linklist">
                                    <li class="linklist__item">Privacy Policy</li>
                                    <li class="linklist__item">Warranty Policy</li>
                                    <li class="linklist__item">Corporate Policy</li>
                                    <li class="linklist__item">Register Complaint</li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer__item">
                            <p class="footer__item-title">Follow us</p>
                            <div class="footer__item-content">
                                <ul class="social-media">
                                    <li><img src={facebook} alt="" /></li>
                                    <li><img src={twiter} alt="" /></li>
                                    <li><img src={instagram} alt="" /></li>
                                    <li><img src={pinterest} alt="" /></li>
                                    <li><img src={youtube} alt="" /></li>
                                    <li><img src={tiktok} alt="" /></li>
                                    <li><img src={linkdin} alt="" /></li>
                                    <li><img src={snapchat} alt="" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             
            </footer>
            <div className="last">
                <p>ZeroLifestyle.com@ 2025 Zero Lifestyle.All Rights Reserved. |Sitemap</p>
            </div>

        </div>
    )
}

export default Footer