import React from 'react'

function Latest() {
  return (
    <div>

        <section className="latest" id="blog">
                <h1>LATEST BLOG</h1>
                <div id="latestblog">
                    <div className="latestblog">
                        <img src="src/resourse/3furniture.jpg" alt="" />
                        <br /><br />
                        <h4>
                            Look even slightly beleivable.
                        </h4>
                        <a href="https://en.wikipedia.org/wiki/Daybed">
                        <button>Read More</button>
                        </a>

                    </div>
                    <div className="latestblog">
                        <img src="src/resourse/6furniture.jpg" alt="" />
                        <br />
                        <br />
                        <h4>Anything embarrassing hidden </h4>
                        <a href="https://en.wikipedia.org/wiki/Chair">
                            <button>Read More</button></a>
                    </div>
                    <div className="latestblog">
                        <img src="src/resourse/5furniture.jpg" alt="" />
                        <br />
                        <br />
                        <h3>Molestias magni commodi</h3>
                        <a href="https://en.wikipedia.org/wiki/Recliner">
                            <button>Read More</button></a>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Latest
