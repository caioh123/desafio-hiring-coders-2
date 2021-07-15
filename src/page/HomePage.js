import React, { useState } from 'react'
import "./HomePage.css"

export const HomePage = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const addLocalStorage = (e) => {
    e.preventDefault();

    const users = {
      name: name,
      email: email
    }

    localStorage.setItem("users", JSON.stringify(users))
  }

  return (
    <main className="container">
      <section className="rightContainer">
        <div className="overlay"></div>
        <img src="https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" className="imageBackground" />
      </section>
      <section className="leftContainer">
        <h1>Cadastre seu email para receber promoções especiais</h1>
        <p className="description">Durante a Black Friday estaremos dando cupons especiais para os inscritos do site</p>

        <div className="informationContainer">
          <form onSubmit={addLocalStorage}>
            <input onChange={(e) => setName(e.target.value)} className="name" placeholder="Seu primeiro nome" type="text" />
            <input onChange={(e) => setEmail(e.target.value)} className="email" placeholder="Seu Email" type="text" />
            <button onSubmit={addLocalStorage} type="submit">Assinar</button>
          </form>


          <p className="policy">
            Fique tranquilo, também não gostamos de spam, manteremos seu email seguro, cheque nossa
             <strong> política de segurança.</strong></p>
        </div>
      </section>


    </main>
  )
}