import React from 'react'

const Header = () => {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 position-fixed vw-100 ">
  <div class="container-fluid">
    <a href='#home' class="navbar-brand">Sanket</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav container-fluid d-flex justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#myWork" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="https://sanket-click-connect.netlify.app/" target='_blank'>E-Com WebApp</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href='#home' class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a href='#about' class="nav-link" >About</a>
        </li>
        <li class="nav-item">
          <a href='#contact' class="nav-link" >Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
