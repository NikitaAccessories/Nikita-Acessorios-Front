import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../GlobalStylesForComponents.css";
import logoPNG from "../../../assets/elements-Account/logo.png";
import appleIcon from "../../../assets/elements-Account/icons/apple-icon.png";
import googleIcon from "../../../assets/elements-Account/icons/google-icon.png";
import facebookIcon from "../../../assets/elements-Account/icons/facebook-icon.png";
import arrowLeft from "../../../assets/elements-Account/icons/arrow-left-icon.png";

const ReceivedCodeDesktop: React.FC = () => {
  return (
    <>
      <header className="relative top-0 w-full h-20 bg-primary-beige100 shadow-xl flex items-center px-14">
        <Link to={"/"}>
          <img
            src={logoPNG}
            className="w-30 h-16"
            alt="Logo Nikita Acessórios"
          />
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center mt-8">
        <section className="flex flex-col items-center w-[42rem] h-[19rem] bg-primary-rose px-6 shadow-xl border border-gray-300 mb-4">
          <div className="flex items-center justify-center mt-4">
            <h1 className="text-xl text-bold font-playfairDisplay">
              escolha uma opção para entrar
            </h1>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col space-y-2 w-1/2">
              <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
                <img
                  src={googleIcon}
                  className="w-6 h-6 ml-3"
                  alt="Google Icon"
                />
                <span className="ml-4 text-sm">ENTRE COM O GOOGLE</span>
              </button>
              <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
                <img
                  src={facebookIcon}
                  className="w-6 h-6 ml-3"
                  alt="Facebook Icon"
                />
                <span className="ml-4 text-sm">ENTRE COM O FACEBOOK</span>
              </button>
              <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
                <img
                  src={appleIcon}
                  className="w-6 h-6 ml-3"
                  alt="Apple Icon"
                />
                <span className="ml-4 text-sm">ENTRE COM A APPLE</span>
              </button>
              <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
                <span className="ml-[0.7rem] text-[0.7rem]">
                  RECEBER CÓDIGO DE ACESSO POR EMAIL
                </span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 font-playfairDisplay">
              <span className="self-center text-md mb-2 w-[20.1rem]">
                RECEBER CÓDIGO DE ACESSO POR E-MAIL
              </span>
              <input
                className="w-[18rem] text-center focus:outline-none h-[2rem] rounded-2xl shadow-xl mb-6"
                type="email"
                id="email"
                placeholder="ex: nikita@gmail.com"
              />

              <span className="self-center text-md mb-2">
                DIGITE O CÓDIGO DE ACESSO
              </span>
              <div className="relative w-[18rem]">
                <input
                  className="w-full text-center focus:outline-none h-[2rem] rounded-2xl shadow-xl pr-10"
                  id="number"
                  placeholder="ex: 123456"
                />
              </div>

              <div className="flex items-center justify-center text-white space-x-4 mt-6">
                <button className="flex items-center justify-center bg-primary-graphite w-36 h-8 rounded-2xl text-lg">
                  <Link to={"/AccountPage"}>
                    <span className="flex items-center justify-center gap-2 mr-4">
                      <img
                        className="h-4 w-4"
                        src={arrowLeft}
                        alt="Icone de Voltar"
                      />
                      Voltar
                    </span>
                  </Link>
                </button>
                <button
                  className="flex items-center justify-center bg-primary-graphite w-36 h-8 rounded-2xl text-lg"
                  type="submit"
                >
                  <span>Entrar</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center w-[50rem] h-[22rem] bg-primary-rose px-6 shadow-xl border border-gray-300 mb-4">
          <div className="flex flex-col font-playfairDisplay px-10">
            <h1 className="flex flex-col items-center justify-center mb-6 text-2xl">
              SEU LOGIN NÃO ESTÁ <span>FUNCIONANDO?</span>
            </h1>
            <h2 className="text-xl mb-4">
              VOCÊ VAI PRECISAR CADASTRAR UMA NOVA SENHA DE ACESSO
            </h2>
            <span>1. Clique no link "esqueci minha senha".</span>
            <span>
              2. A seguir, na área de "receber código de acesso por e-mail",
              insira o seu e-mail.
            </span>
            <span>
              3. Verifique sua caixa de entrada e coloque o código recebido.
            </span>
            <span>
              4. Preencha os campos de senha e confirmação de senha, e pronto.
            </span>
            <span className="mt-6">
              Desculpe-nos pelo transtorno. Mudamos o site para propocionar uma
              melhor experiência Nikita. Mais rápida, mais segura e com a melhor
              seleção de joias para você.
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReceivedCodeDesktop;
