import { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       

        try {
            const response = await fetch('http://localhost:9253/api/v2/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                alert(data.message || '✅ Successfully subscribed!');
                setEmail('');
            }
             else {
                // Handle HTTP error responses
                alert(data.message || `❌ Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Failed to subscribe. Please check your connection.');
        }
         
    };

    return (
        <div>
            <footer>
                <div className="footerone">
                    <div>
                        <i className="fa-solid fa-phone" />
                        <p>Call:+0987654321</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope" />
                        <p>Email:demo@gmail.com</p>
                    </div>
                    <div>
                        <i className="fa-sharp fa-solid fa-location-dot" />
                        <p>Location</p>
                    </div>
                </div>
                <div className="footertwo">
                    <div>
                        <h2>QUICK LINKS</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#furniture">Furniture</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='feeds'>
                        <h2>INSTAGRAM FEEDS</h2>
                        <img src="src/resourse/lastpic.jpg" alt="" />
                        <img src="src/Readmore/five.jpg" alt="" />
                        <img src="src/Readmore/four.jpg" alt="" />
                        <br />
                        <img src="src/Readmore/one.jpg" alt="" />
                        <img src="src/Readmore/two.jpg" alt="" />
                        <img src="src/Readmore/three.jpg" alt="" />
                    </div>
                    <div>
                        <h2>SIGN UP TO OUR NEWSLETTER</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="Enter Your Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <br />
                            <br />
                            <button 
                                type="submit" 
                                onClick={handleSubmit}
                            >
                                Subscribe
                            </button>
                        </form>
                        <br />
                        <br />
                        <a href="https://www.facebook.com/">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="https://x.com/">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a href="https://in.linkedin.com/">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;