import "./style.css";
import React from 'react'
import { useState } from 'react'
import { Button } from "react-bootstrap";

const Join = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motpass, setMotpass] = useState("");
  const IsEmail = () => {
    let mail=document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.match(regex)){
      mail.style.display="none";
      return true;
    }else {
      mail.style.display='block';
      mail.style.animation='dongle Is';
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && IsEmail()){
      sendFeedback("template_d80kz2o", {
        name,
        email,
        motpass,
      });
    }else {
      console.log('error');
    }

    
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setEmail("");
        setMotpass("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

    return (
        <form className="contact-form">
      <h3 id="pr">Rejoignez nous gratuitement!</h3>
      <p id="k"> S’inscrire avec Facebook</p>
     
     
     <p id="l"> S’inscrire avec Googel
      </p>
      
  <div className="form-content">
    
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Entrez votre Nom!"
          value={name}
          autoComplete="off"
        />
     <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email!"
            value={email}
            autoComplete="off"
          />
      <div>
        <input
          type="password"
          id="motpass"
          name="motpass"
          onChange={(e) => setMotpass(e.target.value)}
          placeholder="Mot de pass"
          value={motpass}
        />
      </div>
    </div>
 </div>
      <Button id="b" onClick={handleSubmit}> Se conecter</Button>
     
     <Button id="k"> S’inscrire
      </Button>
      <div className="form-mot"></div>
    </form>

    )
}

export default Join
