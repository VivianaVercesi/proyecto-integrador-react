import React, { useState } from "react";
import "../styles/form.css";

function Form(){
    
        const [userName, setName] = useState("");
        const [number, setNumber] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        function handleSubmit(event) {
            event.preventDefault();
            alert(`Formulario enviado por: ${userName}`);
        }
        return(
        
        <form onSubmit={handleSubmit} id="contact-form">
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id="name" required 
                value={userName}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="number">Teléfono:</label>
                <input type="number" name="number" id="number" 
                value={number}
                onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea name="message" id="message" rows="6" placeholder="Deja aqui tu consulta"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <ul id="error-form"></ul>
            <div>
                <button type="submit" className="btn-in">Enviar</button>
            </div>
        </form>
    );
}

export default Form;
