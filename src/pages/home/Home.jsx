import React, { useState } from 'react'
import HomeImage from "../../images/home-image.png";
import "./home.css"
import { FiSearch } from "react-icons/fi";
import HomeImage2 from "../../images/home-image 2.png"
import Navbar from '../../components/Navbar';
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { categories } from '../../data';
import { topMen } from '../../data';
import { topDeal } from '../../data';
import Card from '../../UI/Card';
import demoMage from "../../images/demo.png";
import googlePlay from "../../images/google play.png";
import apple from "../../images/apple.png";

// TOP MEN 
// import { FaHeart, FaStar } from 'react-icons/fa';
// import Topmen1 from "../../images/top men 1.png";
// import Topmen2 from "../../images/top men 2.png";
// import { CiShoppingCart } from "react-icons/ci";


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeButton, setActiveButton] = useState('next');
    const cardsPerSlide = 4;
    const totalSlides = Math.ceil(categories.length / cardsPerSlide);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        setActiveButton('next');
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
        setActiveButton('prev');
    };

    const getVisibleCategories = () => {
        const start = currentSlide * cardsPerSlide;
        const end = start + cardsPerSlide;
        return categories.slice(start, end);
    };

    // love icon
    // const [isLoved, setIsLoved] = useState(false);

    // const handleLoveClick = () => {
    //   setIsLoved(!isLoved);
    // };
    const [clickedHearts, setClickedHearts] = useState({});

    const handleHeartClick = (id) => {
        setClickedHearts(prevState => ({
            ...prevState,
            [id]: !prevState[id] // Toggle the heart state for this specific id
        }));
    };


  return (
    <>
    <Navbar />

    <div className="all_section_container">
        <div className="easter_container">
            <div className="easter_main">
                <div className="easter_left">
                    <h1>Easter Sales</h1>
                    <p>Enjoy Up To 80% Off This Easter</p>
                </div>

                <div className="easter_right">
                    <div className="easter_image-box">
                        <img src={HomeImage} alt="home image" />
                        <img className="home_image2" src={HomeImage2} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="categories_container">
            <div className="categories_main">
                <div className="categories_content">
                    <h4>Catergories</h4>

                    <div className="categories_button_box">
                        <button className={`${activeButton === 'prev' ? 'active' : ''}`} onClick={handlePrevSlide}><HiArrowLeft /></button>
                        <button className={`${activeButton === 'next' ? 'active' : ''}`} onClick={handleNextSlide}><HiArrowRight /></button>
                    </div>
                </div>

                <div className="categories_card_main">
                    <div className="categories_card_content">
                        {getVisibleCategories().map((category) => (
                            <div className="category_card" key={category.id}>
                                <img src={category.image} alt={category.title} />
                                <div className="category_name">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        ))}       
                    </div>
                </div>
            </div>
        </div>

        <div className="top_men_container">
            <div className="top_men_main">
                <div className="top_men_head">
                    <h4>Top Men Clothes</h4>
                    <p>See All</p>
                </div>

                <div className="top_men_content">           
                    {
                        topMen.map(({id, image, title, subtitle, price, star, rating, vendor, heart, cart}) => {
                           return (
                             <Card key={id} className="mens_card">
                                <img src={image} alt={title} />

                                <div className="men_text_box">
                                    <h4>{title}</h4>
                                    <p className="p1">{subtitle}</p>
                                    <p className="p2">{price}</p>
                                    
                                    <div className="rating_box">
                                        <span className="span_star">{star}</span>
                                        <span className="rate_text">{rating}</span>
                                    </div>
                                    <p className="vendor_text">Vendor: {vendor}</p>
                                </div>

                                <div className="love_box">
                                    {/* <span className="heart" onClick={handleLoveClick} color={isLoved ? 'green' : '#ccc'}>{heart}</span> */}
                                    <span className="heart"  onClick={() => handleHeartClick(id)} style={{ color: clickedHearts[id] ? 'green' : '#ccc' }}>{heart}</span>
                           
                                    <span>{cart}</span>
                                </div>
                            </Card>
                           )
                        })
                    }

                   
                </div>

               
            </div>
        </div>

        <div className="top_men_container">
            <div className="top_men_main">
                <div className="top_men_head">
                    <h4>Top Deals</h4>
                    <p>See All</p>
                </div>

                <div className="top_men_content">           
                    {
                        topDeal.map(({id, image, title, subtitle, price, star, rating, vendor, heart, cart}) => {
                           return (
                             <Card key={id} className="mens_card">
                                <img src={image} alt={title} />

                                <div className="men_text_box">
                                    <h4>{title}</h4>
                                    <p className="p1">{subtitle}</p>
                                    <p className="p2">{price}</p>
                                    
                                    <div className="rating_box">
                                        <span className="span_star">{star}</span>
                                        <span className="rate_text">{rating}</span>
                                    </div>
                                    <p className="vendor_text">Vendor: {vendor}</p>
                                </div>

                                <div className="love_box">
                                    {/* <span className="heart" onClick={handleLoveClick} color={isLoved ? 'green' : '#ccc'}>{heart}</span> */}
                                    <span className="heart"  onClick={() => handleHeartClick(id)} style={{ color: clickedHearts[id] ? 'green' : '#ccc' }}>{heart}</span>
                           
                                    <span>{cart}</span>
                                </div>
                            </Card>
                           )
                        })
                    }

                   
                </div>

               
            </div>
        </div>

        <div className="demo_container">
            <div className="demo_main">
                <div className="demo_left">
                    <img src={demoMage} alt="demo" />
                </div>

                <div className="demo_right">
                    <div className="demo_right_content">
                        <h2>Demo App</h2>

                        <p className="p1">Provide a complete digital experience with the feature-rich Demo iOS and Android mobile apps. Enhance your web application powered by Demo to provide the distinctive Demo user experience on multiple platforms.</p>
                        <p className="p1">The buyer-app's feasible policies, interactive features, strong performance, and user-friendly UI all work together to attract users.</p>

                        <div className="demo_btn_box">
                            <button>
                                <img src={googlePlay} alt="" />
                                <span>Google play</span>
                            </button>

                            <button>
                                <img src={apple} alt="" />
                                <span>Apple Store</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    </>
  )
}

export default Home;