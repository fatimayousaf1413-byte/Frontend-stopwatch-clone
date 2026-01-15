import React from 'react'
import './Earbudsshow.css'
import image from '../../../assets/imgear.webp'
import img4 from '../../../assets/imgear1.webp'
import img32 from '../../../assets/imgear2.webp'
import img28 from '../../../assets/imgear3.webp'
import img21 from '../../../assets/imgear4.webp'
import img from '../../../assets/imgdouble.webp'
import arrow from '../../../assets/arrow.svg'
import { Link } from 'react-router-dom'

const Earbudsshow = () => {
    const handleClick = (e)=>{
        e.preventDefault();
        alert('Your subscription letter is submitted')
    }
    return (
        <div className="double">
            <div className='watchshow' >
                <div className="bothh">
                    <div className="watchshow2 border">
                        <div className="watchshow22">
                            <p>For the Gamers</p>
                            <img src={arrow} alt="" />
                        </div>
                        <Link to={'/showitem/32'} ><img className='watchimg' src={img4} alt="" /></Link>
                    </div>
                    <div className="watchshow2 border">
                        <div className="watchshow22">
                            <p>For the Authusiasts</p>
                            <img src={arrow} alt="" />
                        </div>
                        <Link to={'/showitem/31'} ><img className='watchimg' src={img28} alt="" /></Link>
                    </div>
                </div>
                <div className="bothh">
                    <div className="watchshow2 border">
                        <div className="watchshow22">
                            <p>For the Productivity</p>
                            <img src={arrow} alt="" />
                        </div>
                        <Link to={'/showitem/25'} ><img className='watchimg' src={img32} alt="" /></Link>
                    </div>
                    <div className="watchshow2 border">
                        <div className="watchshow22">
                            <p>For the Focused </p>
                            <img src={arrow} alt="" />
                        </div>
                        <Link to={'/showitem/23'} > <img className='watchimg' src={img21} alt="" /></Link>
                    </div>
                </div>
                <div className="watchshow1 border">
                    <Link to={'/earbuds'} ><img src={image} alt="" /></Link>
                </div>
            </div>
            <div className="doubleshow">
                <div className="watchh bor">
                    <img src={img} alt="" />
                </div>
                <div className="doubletext bor1">
                    <div className="alpha">
                        <h1>Here the Zero First</h1>
                    </div>
                    <div className="beta">
                        <p>
                            Sign up now to hear about our latest offers, new products, collaborations, all things Zero - straight to your inbox.
                        </p>
                    </div>
                    <div class="gama">
                        <form onSubmit={handleClick} >
                            <div class="input-row">
                                <input type="email" id="email" name="email" class="input__field" placeholder="Your e-mail" required/>
                                    <button type="submit" class="button">SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="gama">
                        <form action="">
                            <input type="Email" placeholder='Your e-mail' required />
                            <button>Subscribe</button>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Earbudsshow