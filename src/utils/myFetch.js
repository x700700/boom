const api = "https://gongfetest.firebaseio.com";

const myFetch = (method, endpoint, data) => {
    return new Promise((resolve, reject) => {
        const url = `${api}/${endpoint}/.json`;
        console.log('<<<<<', method, url);

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data && JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => {
                console.log('>>>>>', json);
                resolve(json);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });
};
export default myFetch;
