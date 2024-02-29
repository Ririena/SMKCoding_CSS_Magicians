import "./assets/Style/App.scss";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="">
        <section id="about" className="about-section">
          <img src="/highlight-product.png" alt="Highlight" />
          <div className="content">
            <h2 className="heading">
              About <span>us</span>
            </h2>

            <h3 className="title">
              We provide quality coffee, and ready to deliver.
            </h3>
            <p className="description">
              We are a company that makes and distributes delicious drinks, our
              main product is made with a secret recipe and available in stores
              worldwide.
            </p>
            <a href="" className="btn">
              Get Your Coffee
            </a>
          </div>
        </section>

        <section id="special-menu" className="special-menu-section">
          <h2 className="heading">
            Special menu <span>for you</span>
          </h2>

          <Card />
        </section>
      </main>
    </>
  );
}

export default App;
