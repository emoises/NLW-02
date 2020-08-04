import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/51842925?s=460&u=08427fbfba9973c416f64ab968be942fbecfb7f5&v=4"
                alt="Eduardo Silva"
              />
              <div>
                <strong>Eduardo Silva</strong>
                <span>Quimica</span>
              </div>
            </header>
            <p>
              Entusiasta das melhores tecnologias de química avançada
              <br />
              <br />
              Apaixonado por explodir coisas em laboratório e por mudar a vida
              das pessoas através de experiências. Mais de 200.000 pessoas já
              passaram por uma de minhas explosões.
            </p>
            <footer>
              <p>
                Preço/hora
                <strong>R$80,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
              </button>
            </footer>
          </article>
    )
}
export default TeacherItem;