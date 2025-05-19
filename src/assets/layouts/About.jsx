import Nav from "../components/Nav";
import "../styles/about.css"

function About() {
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
                <main id="about">
                    <h1 className="title">Nuestra Historia</h1>
                    <p className="description">El Atelier de Ana nació del amor por la moda y la creatividad de Ana, una diseñadora con una visión única para realzar la belleza de cada mujer. Desde joven, Ana encontraba inspiración en los colores, texturas y detalles de los trajes antiguos que veía en revistas y desfiles. Con el tiempo, desarrolló un estilo propio, una fusión entre la elegancia clásica y las tendencias modernas, siempre con el objetivo de que cada prenda cuente una historia y se sienta como una segunda piel.</p>
                    <p className="description">En 2015, después de años de perfeccionar sus habilidades y construir una red de artesanos que comparten su pasión, Ana abrió su primer atelier en un pequeño estudio en el corazón de la ciudad. Lo que comenzó como un espacio íntimo donde trabajaba a mano cada diseño se convirtió en un punto de encuentro para mujeres que buscaban algo especial, desde un vestido de fiesta hasta un atuendo elegante para eventos únicos.</p>
                    <p className="description">Cada prenda de El Atelier de Ana es más que una creación de moda: es un homenaje al estilo, la autenticidad y la confianza de la mujer moderna. Hoy, con clientes de diferentes partes del país, nuestra misión sigue siendo la misma: hacer que cada persona que viste una de nuestras piezas se sienta única y especial, con un estilo que refleja su verdadera esencia.</p>
                    
                </main>  
           </div>
             
        );
}

export default About;