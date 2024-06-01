import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper" id='contact'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. <br/> We beleive a good place to live can make your life better</span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        {/* First Row */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>001 001 001 15</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                            Call Now
                        </div>
                        </div>
                      {/* Second mode for first row */}
                      <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>001 001 001 15</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                           Chat Now
                        </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flexStart row">
                        {/* First Row */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>001 001 001 15</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                            Video Call
                        </div>
                        </div>
                      {/* Second mode for second row */}
                      <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>001 001 001 15</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                           Text Now
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact