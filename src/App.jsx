import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import pic from "./assets/pic.jpg";
function App() {
  return (
    <>
      <Header />
      <div className="hero">{/*  <img src={pic} alt="" /> */}</div>
      <div className="text">
        <h1>Think Health, Think Massaga</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit vel
          repellendus dolorem nemo nisi recusandae? Tempore eaque odio rem
          quisquam!
        </p>
        <div className="btn">
          <button>Learn More</button>
          <button>Contact Us Today</button>
        </div>
      </div>
      <div className="intro">
        <p className="text1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit, eligendi laudantium minima molestiae magni odit
          voluptatum error est natus quibusdam similique aspernatur modi?
          Consequuntur rem dolorum eum, eos vel similique?
        </p>
        <br />
        <p className="text2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic
          expedita sit sed nihil quo vero quae Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Vitae in nulla iste maiores vero dolorum
          nisi voluptatum nihil alias nesciunt!.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
