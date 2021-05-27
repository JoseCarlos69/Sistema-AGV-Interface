import { createSlice } from '@reduxjs/toolkit';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
// Isso aqui é um função pronta pra criar um slice que cria um reducer assíncronos, já levando em consideração aquele trem loading, mensagem de erro, isso aqui meio que foi feito em um curso, eu só peguei e reutilizo, lembro muito de cor não, mas você precisa passar uma configuração com informações que normalmente você passa num slice normal.
const createAsyncSlice = (config) => {
    const slice = createSlice({
        // Nome que você vai usar pra referenciar o seu reducer dentro da store.
        name: config.name,
        // O state inicial, o state é o "estado global" dos seus dados, basicamente é onde vai estar as informações que buscamos na API.
        initialState: {
            // loading, dados e erro é padrão, sempre vai ter em qualquer fetch que a gente fizer, porém se quiser que tenha mais algum dado nesse state, algo especifíco desse reducer, eu posso passar na configuração que vai ser jogado após criar os que são padrões.
          loading: false,
          dados: null,
          erro: null,
          //   Isso é spread também, tá espalhando as propriedades do objeto.
          ...config.initialState
        },
        // Reducers, o nome me pegou, bosta.
        // Não é a mesma coisa que eu expliquei lá antes, isso é uma parte que vai dentro do reducer, que são as formas que você tem de manipular ele.
        reducers: {
    // Iniciei o fetch - Opa, vou colocar loading pra true pq eu comecei a carregar os meus dados.
          fetchStarted(state) {
            state.loading = true;
          },
    // O fetch foi feito com sucesso - Opa, vou dizer que meu loading é false pq acabei de carregar, vou definir os meus dados com os dados que vierem do fetch e vou dizer que o meu erro é null pq não teve nenhum erro (não teve pq foi sucesso né).
          fetchSuccess(state, action) {
            state.loading = false;
            state.dados = action.payload; // Isso aqui já é outro macete de Redux kkkkkk
            // Mas só tá jogando o que foi buscado do fetch pra dentro dos dados.
            state.erro = null;
          },
    // O fetch falhou - Opa, vou colocar meu loading como false, pq já terminei de carregar, vou definir meus dados como null, pq deu erro e eu não consegui trazer nada da API, e foi passar o erro que foi retornado pro fetch pro meu erro.
          fetchFail(state, action) {
            state.loading = false;
            state.dados = null;
            state.erro = action.payload;
          },
        //   Aqui faz o mesmo do que eu expliquei lá em cima, esses reducers de cima são padrões, caso queira passar algum diferenciado, eu passo ele no config e aqui os do config são adicionados aos reducers.
          ...config.reducers
        }
        // Foi isso?
      });
    
    //   Aqui eu pego aqueles reducers que eu criei de dentro da slice que eu gerei pra poder usar em umas outras partes.
      const { fetchStarted, fetchSuccess, fetchFail } = slice.actions;
    
    //   Aqui tá as "outras partes", basicamente eu também não vou usar os reducers pra manipular os meu reducer/store, pq normalmente eu vou querer mudar eles já seguindo toda uma lógica junto, então eu faço funções, que a gente chama de ações (actions) pra já executar essas lógicas que mudam meu reducer.
    // Isso é tudo uma forma de segurança, você com o Redux tem dados globais, então nunca vai ter só uma parte dependendo dos teus dados, imagina se o componente do mapa mexe nos dados da hora em que o robô estiver ativo, vai cagar o projeto, isso pra gente é um risco pequeno pq a aplicação não é enorme, porém pense em uma aplicação maior com dados que precisam ser mais precisos e mais protegidos, e componentes que compartilham a mesma informação, no caso eu utilizar a localização tanto no mapa, como naqueles cards que ficam no lado dizendo ponto atual, destino e etc.
    // Então com as actions eu faço com que toda mudança no meu reduce, tenha que passar pela lógica que eu fiz, e lá eu dou um jeito de previnir futuros riscos, ok?
      const asyncActions = (payload) => async (dispatch) => {
        try {
            // Aqui é só o fluxo de um fetch normal.
            // Como é aqui que o "fetch" começa, eu digo que o fetch iniciou.
            // Esse dispatch é pra executar aqueles meus reducers lá
          dispatch(fetchStarted());
        //   Depois do fetch começar eu faço minha lógica.
            // Aqui eu tô pegando a url e options pro fetch, só não tô lembrando desse payload, porém é uma informação que a gente passa na hora que inicia essa ação lá no componente que a gente quer, provavelmente seria um body pra passar num POST ou um id pra passar na url, e ai o fethConfig daria um jeito de gerar isso, apartir de uma função que a gente criasse em outro lugar, essa é uma das partes que eu digo que ficam foda pra eu explicar por não entender bem kkkkkkkkkk
            // Mas são informações que a gente precisa na hora do fetch.
          const { url, options } = config.fetchConfig(payload);
          const response = await fetch(url, options);
          const dados = await response.json();

          if (response.ok === false) throw new Error(dados.message || "Erro ao buscar dados");
 
        //   Se não der erro, vem pra cá e executa aquele meu reducer pra caso o fetch dê certo.
          return dispatch(fetchSuccess(dados));
        } catch ({ message }) {
            // Se tiver dado erro lá em cima, vem pra cá e manda executar aquele meu reducer pra caso o fetch dê errado.
          return dispatch(fetchFail(message));
        }
      };

      return { ...slice, asyncActions };
};

export default createAsyncSlice;
