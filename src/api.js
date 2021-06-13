const urlBase = 'http://localhost:8000';

export const getStatus = () => ({
    url: `${urlBase}/status`,
    options: {
        method: 'GET',
        cache: 'no-store'
    }
});

export const getSensores = () => ({
    url: `${urlBase}/sensores`,
    options: {
        method: 'GET',
        cache: 'no-store'
    }
});
