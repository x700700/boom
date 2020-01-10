import myFetch from "./myFetch";

export const getAllOrg = () => myFetch('GET', '');

export const addUpdateEmp = (num, data) => myFetch('PATCH', `users/${num}`, data);

export const deleteEmp = (num, data) => myFetch('DELETE', `users/${num}`);
