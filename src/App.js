import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CocaColaImage from "./assets/images/coca.jpg";
import inka from "./assets/images/inka.jpg";
import sanluis from "./assets/images/sanluis.jpg";

function App() {
  useEffect(() => {
    // Efecto de scroll en la Navbar
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand brand" href="#home">
            <div className="line-1">
              <span className="black italic">Inversiones</span>
            </div>
            <div className="line-2">
              <span className="green">Selva Center</span>{" "}
              <span className="orange">E.I.R.L</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { name: "Inicio", link: "#home" },
                { name: "Sobre Nosotros", link: "#about" },
                { name: "Productos", link: "#products" },
                { name: "Promociones", link: "#promo" },
                { name: "Contacto", link: "#contact" },
              ].map((item, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <h1 className="display-4 fw-bold">Rapidez en tus pedidos</h1>
          <p className="lead">
            Distribuimos las mejores bebidas para ti y tu negocio.
          </p>
          <a href="#products" className="btn btn-lg shadow">
            Explorar Productos
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a la distribución de bebidas de alta calidad de marcas
            reconocidas. Ofrecemos productos de buena calidad y realizamos la entrega en perfectas
            condiciones gracias a la eficiencia y compromiso de nuestros colaboradores. Nuestro
            compromiso es tu satisfacción.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2>Nuestros Productos</h2>
          <div className="row">
            {[
              "Backus",
              "Lindley",
              "Kola Real",
              "PepsiCo",
              "Gloria",
              "Inka Kola",
              "Coca Cola",
            ].map((product, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card product-card h-100 text-center">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text flex-grow-1">
                      Bebidas de alta calidad de la marca {product}.
                    </p>
                    <a href="#contact" className="btn btn-green mt-auto">
                      Solicitar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promo" className="promo-section">
        <div className="container">
          <h2>Promociones Destacadas</h2>
          <div className="row">
            {[
              {
                name: "Agua Mineral San Luis",
                description: "La pureza del agua en cada gota.",
                image: sanluis,
              },
              {
                name: "Inka Kola",
                description: "La bebida de sabor nacional.",
                image: inka,
              },
              {
                name: "Coca Cola",
                description: "Disfruta el sabor clásico.",
                image: CocaColaImage,
              },
            ].map((promo, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card promo-card h-100 text-center">
                  <img src={promo.image} className="card-img-top" alt={promo.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{promo.name}</h5>
                    <p className="card-text flex-grow-1">{promo.description}</p>
                    <a href="#contact" className="btn btn-green mt-auto">
                      Obtener Promoción
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contáctanos</h2>
          <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Correo Electrónico" />
              </div>
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-green shadow">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="custom-footer text-white text-center py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>Ubicación</h5>
        <p>Av. Los Robles 123, Huancavelica, Perú</p>
      </div>
      <div className="col-md-4">
        <h5>Contacto</h5>
        <p>Teléfono: +51 987 654 321</p>
        <p>Email: contacto@selvacenter.com</p>
      </div>
      <div className="col-md-4">
        <h5>Síguenos</h5>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook me-3"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram me-3"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter me-3"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="mailto:contacto@selvacenter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon gmail"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
    <hr className="bg-light" />
    <p className="mb-0">
      &copy; {new Date().getFullYear()} Inversiones Selva Center E.I.R.L.
      Todos los derechos reservados.
    </p>
  </div>
</footer>

    </div>
  );
}

export default App;
