import React, { useState } from "react";
import XIcon from "../../assets/elements-Components/icons/X-icon.png";
import imagePromotion from "../../assets/elements-Components/images/Image-PromotionScreen.jpeg";
import "../GlobalStylesForComponents.css";

const PromotionScreen: React.FC = () => {
  // Estado para controlar a visibilidade do componente
  const [isVisible, setIsVisible] = useState(true);

  // Função para esconder o componente quando o ícone de fechar for clicado
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <section className="fixed inset-0 flex items-center justify-center z-50">
          <main className="flex overflow-hidden items-center justify-center absolute top-[15rem] w-[48rem] h-[27.2rem]">
            <div className="w-1/2 flex items-center justify-center">
              <img
                src={imagePromotion}
                className="w-full h-full"
                alt="Imagem da Seção"
              />
            </div>
            <div className="w-1/2 h-full bg-primary-red75 flex flex-col justify-center">
              <div className="mb-4 flex flex-col items-center">
                <figure className="flex absolute z-50 top-4 right-4">
                  <img
                    className="cursor-pointer"
                    src={XIcon}
                    alt="Fechar"
                    onClick={handleClose} // Evento de clique para fechar
                  />
                </figure>
                <h1 className="flex flex-col text-white text-[2.2rem] font-libreBaskerville">
                  Salve 10% Na Sua <span>Primeira Compra</span>
                </h1>
                <h3 className="text-white text-center px-4 font-playfairDisplay">
                  não fique para trás, junte-se agora para aproveitar ofertas
                  especiais e novos descontos.
                </h3>
              </div>
              <div className="flex flex-col items-center bg-primary-red p-6">
                <div className="grid grid-cols-2 gap-4 font-playfairDisplay">
                  <input
                    className="rounded-2xl px-[1rem] w-42 py-2 bg-primary-rose25 text-white"
                    type="text"
                    placeholder="Primeiro Nome"
                  />
                  <input
                    className="rounded-2xl px-[1rem] w-42 py-2 bg-primary-rose25 text-white"
                    type="text"
                    placeholder="Segundo Nome"
                  />
                  <input
                    className="rounded-2xl px-[1rem] w-42 py-2 bg-primary-rose25 text-white"
                    type="email"
                    placeholder="E-mail"
                  />
                  <button className="rounded-2xl px-[1rem] w-42 py-2 bg-primary-vinho text-white">
                    Cadastre-Me
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-2 font-playfairDisplay">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                  />
                  <label className="text-white">
                    Eu concordo em receber novidades, atualizações e outros
                    contextos
                  </label>
                </div>
              </div>
            </div>
          </main>
        </section>
      )}
    </>
  );
};

export default PromotionScreen;
