import React, { useReducer } from 'react';
import { NavLink } from 'react-router';

const initialState = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            if (state.count > 0) {

                return { count: state.count - action.payload };
            }
            return state;
        default: return state;
    }

}


function Cards({ addToCart }) {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [stateone, dispatchone] = useReducer(counterReducer, initialState);
    const [statetwo, dispatchtwo] = useReducer(counterReducer, initialState);
    const [statethree, dispatchthree] = useReducer(counterReducer, initialState);
    const [statefour, dispatchfour] = useReducer(counterReducer, initialState);
    const [statefive, dispatchfive] = useReducer(counterReducer, initialState);


    return (
        <div>
            <section className="ourfurniture" id="furniture">
                <div>
                    <h1>OUR FURNITURES</h1>
                    <p style={{ fontSize: "20px" }}>
                        which don't look even slightly beleivable. If you are going to use a
                        passage lorem ipsum, you need to be sure there isn't an
                    </p>
                </div>

                {/* CARD SECTION BEGINS.  */}
                <div className="furnitur">

                    {/* CARD ONE.*/}

                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Beds_DdoHY5P_QL.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt=""
                        />
                        <h3>Beds Design</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 15000</p>
                        <p>Price: {state.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => { dispatch({ type: 'decrement', payload: 15000 }) }}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => { dispatch({ type: 'increment', payload: 15000 }) }}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <div>
                            <button className='cart' onClick={() => addToCart({ name: "Reclining Sofa", price: 8000 })} > AddToCart</button>
                            <button className='buy'>Buy Now</button>
                        </div>

                    </div>
                    {/* CARD TWO. */}

                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Recliners_KPHN_e3oE.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt=""
                        />

                        {/* IMPLEMENTING UPDATED LOGIC ON THIS SPECIFIC CARD. */}

                        <h3>Reclining Sofa</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 8000</p>
                        <p>Price: {stateone.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => dispatchone({ type: 'decrement', payload: 8000 })}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => dispatchone({ type: 'increment', payload: 8000 })}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <button className='cart' onClick={() => addToCart({ name: "Reclining Sofa", price: 8000 })} > AddToCart</button>
                        <button className='buy'>Buy Now</button>
                    </div>

                    {/* CARD THREE. */}

                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Living-Chairs_zG0HSd4C0Z.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt="" />
                        <h3>Living Chair Design</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 5000</p>
                        <p>Price: {statetwo.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => dispatchtwo({ type: 'decrement', payload: 5000 })}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => dispatchtwo({ type: 'increment', payload: 5000 })}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <button className='cart' onClick={() => addToCart({ name: "Living Chair Design", price: 5000 })} > AddToCart</button>
                        <button className='buy'>Buy Now</button>
                    </div>
                </div>

                {/* CARD FOUR. */}

                <div className="furnitur">
                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Sofa-Cum-Beds_N4w3wLtDy.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt=""
                        />
                        <h3>Sofa Cum Beds</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 12000</p>
                        <p>Price: {statethree.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => dispatchthree({ type: 'decrement', payload: 12000 })}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => dispatchthree({ type: 'increment', payload: 12000 })}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <button className='cart' onClick={() => addToCart({ name: "Sofa Cum Beds", price: 12000 })} > AddToCart</button>
                        <button className='buy'>Buy Now</button>
                    </div>

                    {/* CARD FIVE. */}

                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Coffee-&-Center-Tables_x5fVqouyi.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt="" />
                        <h3>Coffee Tables</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 10000</p>
                        <p>Price: {statefour.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => dispatchfour({ type: 'decrement', payload: 10000 })}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => dispatchfour({ type: 'increment', payload: 10000 })}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <button className='cart' onClick={() => addToCart({ name: "Coffee Tables", price: 10000 })} > AddToCart</button>
                        <button className='buy'>Buy Now</button>
                    </div>

                    {/* CARD SIX. */}

                    <div className="furniture-items">
                        <img
                            src="https://images.durian.in/assets/images/popular_category/Desk_1U3d0iSbox.jpg?tr=w-396,h-300,pr-true,f-auto"
                            alt=""
                        />
                        <h3>Desks</h3>
                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5px', textDecorationThickness: '2px' }}>₹ 12000</p>
                        <p>Price: ₹{statefive.count}</p>
                        <div className="butn" style={{ marginBottom: '10px' }}>
                            <button className='controls' onClick={() => dispatchfive({ type: 'decrement', payload: 12000 })}><i className="fa-solid fa-minus fa-lg" style={{ color: "white" }} /></button>
                            <button className='control' onClick={() => dispatchfive({ type: 'increment', payload: 12000 })}><i className="fa-solid fa-plus fa-lg" style={{ color: "white" }} /></button>
                        </div>
                        <button className='cart' onClick={() => addToCart({ name: "Desk", price: 12000 })} > AddToCart</button>
                        <button className='buy'>Buy Now</button>
                    </div>
                </div>

                <NavLink
                    to="/more"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        fontSize: '19px',
                        border: '2px solid black',
                        fontFamily: 'sans-serif',
                        background: '#007BFF',
                        textDecoration: 'none',
                        color: 'white',
                        borderRadius: '5px',
                    }}
                >
                    MORE PRODUCTS....
                </NavLink>

            </section>
        </div>
    )
}

export default Cards;
