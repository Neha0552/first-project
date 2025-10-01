import React from 'react'

function AboutUs() {
  return (
    <div>
      <header>
                <div>
                    <h1>
                        FOR ALL YOUR <br />
                        FURNITURE NEEDS.
                    </h1>
                    <p style={{ fontSize: "17px" }}>
                        A relatively cheap material, wood lends itself to various kinds of
                        treatment; for example, it can be stained, painted, gilded, and glued.
                        It can be shaped by means of hand- or power-operated cutting and
                        drilling tools. Heated, it can be bent to a certain extent into a
                        predetermined shape and thereafter will retain the shape. The grain in
                        wood creates a structure with varying character, which in itself
                        provides a natural ornamental surface, in which patterns can be formed
                        by means of precalculated juxtapositions. Colours range from white,
                        yellow, green, red, brown, gray to black through countless intermediary
                        tones. By juxtaposing wood of different colours, extremely rich effects
                        have been achieved, especially in the 17th and 18th centuries.
                    </p>
                    <a href="#contact">
                    <button id="btnOne">
                        <b>Contact Us</b>
                    </button>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/List_of_furniture_types#References">
                    <button id="btnTwo">
                        <b>About Us</b>
                    </button>
                    </a>
                </div>
                <div className="firstimg">
                    <img
                        src="src/cards/premium_photoone.avif"
                        alt="" />
                </div>
            </header>
    </div>
  )
}

export default AboutUs
