import React from 'react'
import { useState } from 'react';

function ContactUs() {
    const [name, setname] = useState('');
    const [mobile, setnumber] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    // const API_URL = import.meta.env.VITE_API_URL;
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:9253/api/v3/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mobile, email, message }),
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                console.log(data)
            }

            alert('CONTACT FORM SUBMITTED SUCCESSFULLY ✅');
            setname('');
            setnumber('');
            setemail('');
            setmessage('');

        }
        catch (error) {
            console.error('Login error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <section className="contact" id="contact">
                <form onSubmit={handleSubmit}>
                    <h1>CONTACT US</h1>
                    <input type="text" value={name}
                        onChange={(e) => setname(e.target.value)} placeholder="Your Name" />

                    <br /><br />
                    <input type="text" value={mobile}
                        onChange={(e) => setnumber(e.target.value)} placeholder="Mobile" />

                    <br /><br />

                    <input type="email" value={email}
                        onChange={(e) => setemail(e.target.value)} placeholder="Email" />

                    <br /><br />

                    <input type="text" value={message}
                        onChange={(e) => setmessage(e.target.value)} placeholder="Message" />

                    <br /><br />

                    <button type="submit" onClick={handleSubmit}>SEND</button>
                </form>
                <div id="iframe">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905783064!2d76.68831085598289!3d30.73240198453836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1727884693119!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
            {/* ENDING OF CONTACT SECTION. */}

            {/* BEGINING OF DELIVER SECTION. */}
            <section className="deliver">
                <h1>We Deliver To</h1>
                <div className="deliverto">
                    <div>
                        <ul>
                            <li>Agra</li>
                            <li>Ahmedabad</li>
                            <li>Ajmer</li>
                            <li>Allahabad</li>
                            <li>Anand</li>
                            <li>Aurangabad</li>
                            <li>Bangalore</li>
                            <li>Bgaruch</li>
                            <li>Chennai</li>
                            <li>Coimbatore</li>
                            <li>Dehradun</li>
                            <li>Delhi</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Faridabad</li>
                            <li>Ghaziabad</li>
                            <li>Ghitorni</li>
                            <li>Gorakhpur</li>
                            <li>Gurgaon</li>
                            <li>Guwahati</li>
                            <li>Hyderabad</li>
                            <li>Indore</li>
                            <li>Jaipur</li>
                            <li>Jammu</li>
                            <li>Jamshedpur</li>
                            <li>Kanpur</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Kolkata</li>
                            <li>Lucknow</li>
                            <li>Ludhiana</li>
                            <li>Mumbai</li>
                            <li>Noida</li>
                            <li>Palghar</li>
                            <li>Patna</li>
                            <li>Prayagraj</li>
                            <li>Pune</li>
                            <li>Raipur</li>
                            <li>Ranchi</li>
                            <li>Surat</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Thane</li>
                            <li>Vadodara</li>
                            <li>Varanasi</li>
                            <li>Visakhapatnam</li>
                            <li>Panchkula</li>
                            <li>Moahali</li>
                        </ul>
                    </div>
                </div>
            </section>
            <br /><br /><br />
        </div>

    )
}

export default ContactUs
