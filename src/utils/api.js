// import myFetch from "./myFetch";
import mock from './mock';

/*
// Real Mode:
export const getAllOrg = () => myFetch('GET', '');

export const addUpdateEmp = (num, data) => myFetch('PATCH', `users/${num}`, data);

export const deleteEmp = (num) => myFetch('DELETE', `users/${num}`);
*/

// Mock Mode:
export const getAllOrg = () => mock;
export const addUpdateEmp = (num, data) => {};
export const deleteEmp = (num) => {};

export const getSecrets = () => mock.secrets;
export const getAllUsers = () => mock.users;

