// import myFetch from "./myFetch";
import mock from './mock';

/*
// Real Mode:
export const getAllOrg = () => myFetch('GET', '');

export const addUpdateEmp = (num, data) => myFetch('PATCH', `users/${num}`, data);

export const deleteEmp = (num) => myFetch('DELETE', `users/${num}`);
*/

// Mock Mode:
const sleep = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

export const getAllOrg = () => mock;
export const addUpdateEmp = (num, data) => {};
export const deleteEmp = (num) => {};

export const getSecrets = () => mock.secrets;
export const getAllUsers = () => mock.users;


const PAGE_SIZE = 5;
export const getUsersPage = async (page) => {
    await sleep(2000);
    return mock.users.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE);
};
