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
                <Title
                    trademark="El Atellier de Ana"
                />
            </header>
            <main className="container">
                
                
                <Phrase
                    text='"Cada prenda cuenta una historia, descubre la tuya."'
                />
                <Button
                    Link2="/Products"
                    text="Ingresar"
                />
            </main>
            <footer>
                <h1> &copy; 2025 - Mi app React </h1>
            </footer>
        </div>
        
    )
    
}

export default Home;