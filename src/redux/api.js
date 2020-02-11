// import myFetch from "./myFetch";

/*
// Real Mode:
export const get = () => myFetch('GET', '');

export const add = (num, data) => myFetch('PATCH', `users/${num}`, data);
*/



// Mock Mode:
const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

export const signin = async ({ username }) => {
    await sleep(10);
    return {
        username: username,
    };
};
