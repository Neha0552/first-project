import React from 'react'

function Store() {
  return (
    <div>
       <section className='store'>    
                    <div className="delivery" style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', background: '#f8f8f8' }}>
                        <div className='highlights' style={{ textAlign: 'center' }}>
                            <i id='icon' className="fa-solid fa-truck-fast fa-2x" style={{ color: '#444' }}></i>
                            <h4 id='icn'>Quick Delivery</h4>
                        </div>
                        <div className='highlights' style={{ textAlign: 'center' }}>
                            <i id='icon' className="fa-solid fa-store fa-2x" style={{ color: '#444' }}></i>
                            <h4 id='icn'>Pick Up in Store</h4>
                        </div>
                        <div className='highlights' style={{ textAlign: 'center' }}>
                            <i id='icon' className="fa-solid fa-box fa-2x" style={{ color: '#444' }}></i>
                            <h4 id='icn'>Special Packaging</h4>
                        </div>
                        <div id='icn' className='highlights' style={{ textAlign: 'center' }}>
                            <i id='icon' className="fa-solid fa-rotate-left fa-2x" style={{ color: '#444' }}></i>
                            <h4 id='icn'>Return & Refund</h4>
                        </div>
                    </div>
            </section>
            <section className="aboutus" id='about'>
                <div>
                    <img src="src/resourse/secondimg.jpeg" alt="" />
                </div>
                <div className="about">
                    <h1>ABOUT US</h1>
                    <p>
                        Furniture, household equipment, usually made of wood, metal, plastics,
                        marble, glass, fabrics, or related materials and having a variety of
                        different purposes. Furniture ranges widely from the simple pine chest
                        or stick-back country chair to the most elaborate marquetry work cabinet
                        or gilded console table. The functional and decorative aspects of
                        furniture have been emphasized more or less throughout history according
                        to economics and fashion. Chairs are always for sitting in, but some are
                        more comfortable or highly ornamented than others.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Furniture#Types">
                        <button id="read"><b>Read More</b></button></a>
                </div>
            </section>
    </div>
  )
}

export default Store
