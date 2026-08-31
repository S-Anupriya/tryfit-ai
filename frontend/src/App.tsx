import "./App.css";
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          TryFit AI
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Try-On</a>
          <a href="#">Profile</a>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">
            AI-POWERED FASHION
          </p>

          <h1>
            See it.
            <br />
            Try it.
            <br />
            Wear it.
          </h1>

          <p className="description">
            Discover fashion, visualize your look with AI,
            and make smarter clothing decisions before you buy.
          </p>

          <button className="primary-button">
            Start Virtual Try-On
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;