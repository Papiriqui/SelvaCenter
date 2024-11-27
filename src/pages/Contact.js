import React from 'react';

const Contact = () => (
  <div className="container mt-5">
    <h1>Contáctanos</h1>
    <p>Si deseas más información, escríbenos al correo <strong>ventas@distribuidorabebidas.com</strong>.</p>
    <form>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" placeholder="Ingresa tu nombre" />
      </div>
      <div className="form-group">
        <label>Correo Electrónico</label>
        <input type="email" className="form-control" placeholder="Ingresa tu correo" />
      </div>
      <div className="form-group">
        <label>Mensaje</label>
        <textarea className="form-control" rows="3" placeholder="Escribe tu mensaje"></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Enviar</button>
    </form>
  </div>
);

export default Contact;
