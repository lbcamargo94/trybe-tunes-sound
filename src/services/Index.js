// const USER_KEY = 'user';

// const readUser = () => JSON.parse(localStorage.getItem(USER_KEY));
// const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));

// export const getUser = () => new Promise(() => {
//   let user = readUser();
//   if (user === null) {
//     user = {};
//   }
// });

// export const createUser = (user) => new Promise(() => {
//   const emptyUser = {
//     name: '',
//     email: '',
//     image: '',
//     description: '',
//   };
//   saveUser({ ...emptyUser, ...user });
// });

// export const updateUser = (updatedUser) => new Promise(() => {
//   saveUser({ ...updatedUser });
// });