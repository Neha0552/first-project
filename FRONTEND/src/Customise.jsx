import React from 'react';
import { NavLink } from 'react-router';

function Customise() {
  return (
    <div>

         <section className="choose" id='customise'>
                <h1>CHOOSE-CREATE-CUSTOMIZE</h1>
                <div className="customize">
                    <div id="create">
                        <h1>
                            Create Your Dream Sofa <br /> <span>with 45+ custom colours</span>
                        </h1>

                        <NavLink
                            to="/custom"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '16px',
                                background: 'black',
                                textDecoration: 'none',
                                color: 'white',
                                borderRadius: '5px',
                            }}
                        >
                            CUSTOMIZE NOW!!!
                        </NavLink>


                    </div>
                    <div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1683120644955-f48b6454690e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbSUyMHNvZmF8ZW58MHx8MHx8fDA%3D"
                            alt="" />
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Customise
