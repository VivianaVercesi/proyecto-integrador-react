import Nav from "../components/Nav";
import Form from "../components/Form";
import "../styles/contact.css";

function Contact() {
    return(
            <div>
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
                <main id="contact">
                    <Form/>
                </main>
            </div>
        );
}

export default Contact;