import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Form from "../components/Form";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />

      <section className="cards">
        <Card titulo="Card 1" />
        <Card titulo="Card 2" />
        <Card titulo="Card 3" />
      </section>

      <Form />
      <Footer />
    </div>
  );
};

export default Home;