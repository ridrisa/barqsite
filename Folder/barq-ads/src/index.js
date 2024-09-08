const App = () => {
  useEffect(() => {
      gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
      ScrollReveal().reveal('.reveal', { duration: 1000 });
  }, []);
  
  return (
      <div className="container mx-auto p-4">
          <h1 className="text-center text-4xl font-bold title">Welcome to the Interactive Web App</h1>
          <div className="swiper-container my-8">
              <div className="swiper-wrapper">
                  <div className="swiper-slide bg-white text-center p-4 reveal">
                      <h2 className="text-2xl">Slide 1</h2>
                  </div>
                  <div className="swiper-slide bg-white text-center p-4 reveal">
                      <h2 className="text-2xl">Slide 2</h2>
                  </div>
                  <div className="swiper-slide bg-white text-center p-4 reveal">
                      <h2 className="text-2xl">Slide 3</h2>
                  </div>
              </div>
              <div className="swiper-pagination"></div>
          </div>
          <button className="btn btn-primary">Click Me!</button>
      </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
