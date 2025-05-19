import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Phrase from "../components/Phrase";
import Button from "../components/Button";
import "../styles/home.css";


function Home() {
    return(
        <div className="body">
            <header>
                <Nav
                    position1="Inicio" link1="/"
                    position2="Catálogo" link2="/Products"
                    position3="Nosotros" link3="/About"
                    position4="Reseñas" link4="/Reviews"
                    position5="Contacto" link5="/Contact"
                    position6="Ubicación" link6="/Where"
                />
               
            </header>
            <main className="container">
                
                <Title
                    trademark="El Atellier de Ana"
                />
                <Phrase
                    text='"Cada prenda cuenta una historia, descubre la tuya."'
                />
                <Button
                    Link2="/Products"
                />
            </main>
            
        </div>
        
    )
    
}

export default Home;