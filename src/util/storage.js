export const getStorage = (key, valorInicial) => {
    try {
        return JSON.parse(window.localStorage.getItem(key)) || valorInicial;
    } catch(e) {
        return valorInicial;
    }
};

export const setStorage = (key, valor) => {
    window.localStorage.setItem(key, valor);
};
