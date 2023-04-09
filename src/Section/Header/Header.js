import React from 'react'
import "./Header.css"

import Logo from '../../Components/Logo/Logo'


export default function Header() {
  return (
   
    <>
     <div class="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
        <div class="container">
          <Logo />
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="mainmenu" >
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="/#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/services" class="nav-link">Services</a></li>
                    <li class="nav-item dropdown">
                        <a href="n" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                        <ul class="dropdown-menu">
                            <li><a href="#learn" class="dropdown-item">Product1</a></li>
                            <li><a href="#next" class="dropdown-item">Product2</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#faq" class="nav-link">Sign up</a></li>

                </ul>
            </div>
        </div>
    </div>

    </>
  
  )
}
