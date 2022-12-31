import React from "react";

function BarraNav(){

    return(<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
   
      <a className="nav-item nav-link" href="#">Inicio</a>
      <a className="nav-item nav-link" href="#">Iniciar sesion</a>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default BarraNav;