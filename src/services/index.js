import { useUpdateContext } from '../utils/provider';

const { data, setData } = useUpdateContext();

// const emptyUser = {
//   id: user.id,
//   name: user.name,
//   email: user.email,
//   image: user.image,
//   description: user.description,
//   favorite: [],
// };

const createUser = async (user) => {
  try {
    let addNewUser = { data: [...data.users, user] };

    return await setData(addNewUser);
  } catch (error) {
    throw new error;
  }
};

export default {
  createUser,
};