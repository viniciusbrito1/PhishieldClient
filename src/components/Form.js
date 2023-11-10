import { useState } from 'react'

const Form = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const onChangeNome = (evt) => {
    setNome(evt.target.value)
  }
  const onChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }
  const sendEmail = async (evt) => {
    evt.preventDefault()
    try {
      const response = await fetch('http://191.101.18.198:3001/api/email-contato', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
      })
      const json = await response.json()
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }

    return false
  }

  return (
    <div>
      {success && <p>E-mail enviado com sucesso!</p>}
      {!success && (
        <form onSubmit={sendEmail} method='post'>
          <input  name='nome' value={nome} onChange={onChangeNome} placeholder="Numero"/>
          <input  name='email' value={email} onChange={onChangeEmail} placeholder="Numero"/>
          <select name="framework" >
                <option value="">Escolha o tema do phishing</option>
                <option value="Google">Google</option>
                <option value="BB">Banco do Brasil</option>
                <option value="Bradesco">Bradesco</option>
            </select>
          <input type="submit" value="Enviar" style={{fontSize: '25px',}}/>
        </form>
      )}
    </div>
  )
}
export default Form

/*

import { useState } from "react";
import { useForm } from "react-cool-form";
import { db } from "../services/firebase";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        console.log(email)
        e.preventDefault();
    
        db.collection("contacts")
          .add({
            name: name,
            email: email,
            message: message,
          })
          .then(() => {
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
          });
    
        setName("");
        setEmail("");
        setMessage("");
      };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <input name="firstName" placeholder="Numero"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <input name="lastName" placeholder="Numero"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <select name="framework" >
                <option value="">Escolha o tema do phishing</option>
                <option value="Google">Google</option>
                <option value="BB">Banco do Brasil</option>
                <option value="Bradesco">Bradesco</option>
            </select>
            <input type="submit" value="Enviar" style={{fontSize: '25px',}}/>
        </form>
    );
};

export default Form;

*/
