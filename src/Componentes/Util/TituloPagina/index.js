// Importando React para ter ele lendo o JSX, além de ter acesso aos Hooks e quaisquer outros recurso do react.
import React from 'react';
// Importação do modúlo de css.
import estilos from './index.module.css';

// Estrutura básica do componente funciona.
// Variável que guarda uma função.
// Função que gera o componente.
// O parâmetro da função normalmente é "props", um objeto com várias coisas dentro dele, uma delas que sempre tem é o children, children são os filhos do componente, no caso tudo que está dentro da tag.
// Quando formos usar o componente, vai ser assim:
// <TituloPagina>Título que a gente quer passar</TituloPagina>
const TituloPagina = ({ children }) => {
    // Vou deixar esses resumos aqui, é bom pra lembrar.
    // Basicamente o nosso componente é isso, ele é um h1 que vai receber um conteúdo filho (children).

    // Retorno do componente funciona, todo componente deve retornar JSX.
    // JSX é a linguagem HTML mesclada com JavaScript.
    // Aqui pra usar um estilo em modúlo é preciso passar como um objeto.
    return <h1 className={estilos.TituloPagina}>{children}</h1>;
};

// Componente sendo exportado, é isso que permite que a gente acesse esse arquivo em outro arquivo usando o import.
// import (importa) - Trago algo pra dentro
// export (export) - Mando algo pra fora.
export default TituloPagina;
