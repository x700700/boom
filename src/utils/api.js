import myFetch from "./myFetch";

export const getAllOrg = () => myFetch('GET', '');

export const updateEmp = (num, data) => myFetch('PATCH', `users/${num}`, data);
