const api = "https://gongfetest.firebaseio.com";

export const myFetch = (cmd) => {
  return new Promise((resolve, reject) => {
    const endpoint = `${api}/${cmd}/.json`;
    console.log('<<<<<', endpoint);
    fetch(endpoint)
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
