import { NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Collection from './Collection';
import Customise from './Customise';
import Latest from './Latest';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Store from './Store';
import Cards from './Cards';

function Interface() {
    const [cartItems, setCartItems] = useState([]);
     const [search, setSearch] = useState('');

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.name === product.name);
            if (existingItem) {
                return prev.map(item =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        console.log("Added to cart:", product);
    };

    const removeFromCart = (index) => {
        setCartItems(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            {/* CREATING NAV BAR */}
            <nav>
                <img id='logo' src="src/Readmore/LOGOS.png" alt="" style={{ height: "90px", width: "90px" }} />
                <div>
                    <ul id="navList">
                        <li id='one'><a href="#home">HOME</a></li>
                        <li id='one'><a href="#about">ABOUT</a></li>
                        <li id='one'><a href="#furniture">FURNITURES</a></li>
                        <li id='one'><a href="#blog">BLOG</a></li>
                        <li id='one'><a href="#contact">CONTACT US</a></li>
                        <li id='one' className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                COLLECTIONS
                            </a>
                            <ul className="dropdown-menu">
                                <li id='one'><a className="dropdown-item" href="#customise">CUSTOMIZE FURNITURE</a></li>
                                <li id='one'><a className="dropdown-item" href="#action">OUR COLLECTIONS</a></li>
                                <li id='one'><a className="dropdown-item" href="#testimonial">TESTIMONIAL</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="login">
                    <h3 style={{ marginTop: 35, fontSize: 19 }}>
                        <NavLink
                            to="/login"
                            style={{
                                display: 'inline-block',
                                fontSize: '20px',
                                cursor: 'pointer',
                                marginLeft: '10px',
                                background: 'transparent',
                                textDecoration: 'none',
                                color: 'black',
                            }}>
                            LOGIN
                            <i className="fa-solid fa-user fa-xl" style={{ marginLeft: 15 }} />
                        </NavLink>
                    </h3>
                </div>

                <div className="search">
               
                        <input
                            placeholder="Search..."
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}                                     
                            style={{ height: '30px', width: '130px',marginTop: '30px', color: 'black' }} />
                    
                </div>

                <li style={{ position: "relative", display: 'inline-block' }}>
                    <NavLink
                        to="/cart"
                        state={{ cartItems, removeFromCart }}
                        style={{
                            display: 'inline-block',
                            fontSize: '20px',
                            cursor: 'pointer',
                            marginLeft: '10px',
                            background: 'transparent',
                            textDecoration: 'none',
                            color: 'black',
                        }}>
                        <i className="fa-solid fa-cart-shopping fa-xl"
                            style={{ marginTop: '40px', marginLeft: '10px', fontSize: '30', position: 'relative' }} />
                    </NavLink>
                    {cartItems.length > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '25px',
                            right: '-5px',
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '3px 6px',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}>
                            {cartItems.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    )}
                </li>
            </nav>

            {/* ENDING OF NAV SECTION */}
            <br /><br /><br />
            {/* CREATING A HOME PAGE */}
            <section className="head" id="home">
                <h1 id='Main' data-aos="fade-right" data-aos-duration="350" data-aos-delay="70" data-aos-easing="ease-in-sine">FURNITURE</h1>
                {/* CAROUSEL */}
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="src/carsouel/four.avif" className="d-block w-100" alt="furniture" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/carsouel/onee.avif" className="d-block w-100" alt="furniture" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/carsouel/two.avif" className="d-block w-100" alt="furniture" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/carsouel/three.avif" className="d-block w-100" alt="furniture" />
                        </div>
                        <div className="carousel-item">
                            <img src="src/carsouel/Furniture Store In London-jpg.webp" className="d-block w-100" alt="furniture" />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev btn"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next btn"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <AboutUs />
            <Store />
            <Cards addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
            <Collection />
            <Customise />
            <Latest />
            <Testimonial />
            <ContactUs />
            <Footer />
            
        </>
    );
}

export default Interface;