import { ArrowRight, Sparkles, Shirt } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            <Sparkles size={16} />
            AI-POWERED FASHION
          </div>

          <h1>
            See it.
            <br />
            <span>Try it.</span>
            <br />
            Wear it.
          </h1>

          <p className="hero-description">
            Discover fashion from multiple platforms, visualize your
            outfits with AI, and make smarter clothing decisions before
            you buy.
          </p>

          <div className="hero-buttons">

            <Link to="/try-on" className="primary-button">
              Start Virtual Try-On
              <ArrowRight size={18} />
            </Link>

            <Link to="/products" className="secondary-button">
              Explore Fashion
            </Link>

          </div>

        </div>

        {/* AI Fashion Preview */}
        <div className="hero-visual">

          <div className="visual-card">

            <div className="visual-top">
              <span>AI STYLE PREVIEW</span>
              <Sparkles size={18} />
            </div>

            <div className="fashion-placeholder">
              <Shirt size={90} strokeWidth={1} />

              <p>Your virtual wardrobe</p>
              <span>AI-powered visualization</span>
            </div>

            <div className="visual-bottom">

              <div>
                <small>STYLE MATCH</small>
                <strong>94%</strong>
              </div>

              <div>
                <small>SIZE</small>
                <strong>M</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="section-heading">
          <p>WHY TRYFIT AI?</p>
          <h2>Fashion shopping, reimagined.</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <span>01</span>
            <h3>Discover</h3>
            <p>
              Explore fashion products from different platforms
              in one place.
            </p>
          </div>

          <div className="feature-card">
            <span>02</span>
            <h3>Visualize</h3>
            <p>
              Use AI-powered virtual try-on to preview your
              selected outfit.
            </p>
          </div>

          <div className="feature-card">
            <span>03</span>
            <h3>Choose</h3>
            <p>
              Get personalized recommendations and smarter
              clothing decisions.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;