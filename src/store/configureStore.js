// Explicando mais ou menos, Redux é uma biblioteca que facilita o gerenciamento de estados globais, no caso informações que devem transitar entre arquivos, isso vai ser muito usado na nossa home, pois provavelmente os dados de lá vão ser buscados por uma única requisição, que vai trazer a situação do robô, localização e ocorrências recentes.

// Porém o header que vai receber os dados da situação, o mapa o da localização, e a parte de atividade vai receber as ocorrências, então esses 3 componentes devemt ter acesso a mesma fonte de dados, então eu não posso deixar que um desses componentes seja responsável por puxar e armazenar esses dados.

// Preciso ter um "componente" a parte, que fique responsável por buscar e guardar esses dados, e que também seja responsável por transmitir as informações corretamentes para os 3 componentes que precisam dele, essa "componente" vai ser algo global no qual os outros 3 vão poder ter acesso igualmente.
// ==========================================================================
// '@reduxjs/toolkit' - É uma ferramenta criada pela mesma empresa que criou o Redux e ela meio que facilita o uso do Redux, você tem diversas preliminares que normalmente você teria que fazer na mão, usando a toolkit ela faz isso pra você.

// CombineReduces - Junta todos os reducers, que seriam basicamente um grupo de dados, em um só grupo.
// getDefaultMiddleware - Pega os middleware padrões do Redux, middleware são coisas que acontecem no meio do transporte de dados, no caso eu peço pro redux uma informação, redux pega, executa os middleware, depois me entrega os dados, isso pode servir caso você queira manipular todos os dados de uma determinada forma, então você cria um middleware e ele aplica isso pra todos os dados antes de te entregar.
// configureStore - é usado pra criar/configurar a sua "store", que basicamente é o teu armazém de dados, é onde você irá acessar pra trazer os estados globais, ela é formada pelos reducers e pelos middleware.
import { combineReducers, getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import status from './status';

// com isso eu crios meus middlewares, getDefaultMiddleware me trás uma lista com os middlewares padrões, eu pego eles e espalho (spread) em uma nova array, ai quando eu quiser adicionar um middleware novo, eu só continuo colocando na array. 
const middlewares = [...getDefaultMiddleware()];
// Com o combine reducers eu vou criar meu reducer formado pelos reducers que foram combinados, no caso tudo vira uma coisa só, porém separando eles eu consigo me organizar melhor na hora de programar.
const reducer = combineReducers({ status });
// Aqui eu configuro a store passando um objeto com o meu reducer e meus middlewares
const store = configureStore({ reducer, middlewares });

// Aqui eu exporto ela pra poder usar em outro arquivo.
export default store;
