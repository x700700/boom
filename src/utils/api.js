import myFetch from "./myFetch";

export const getAllOrg = () => myFetch('GET', '');

export const updateEmp = (id, data) => myFetch('PATCH', `users/${id}`, data);
