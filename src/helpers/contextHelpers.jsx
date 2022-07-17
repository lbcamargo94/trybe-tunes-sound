import { useUpdateContext } from '../utils/provider';
import { useNavigate } from 'react-router-dom';

const { data, setData } = useUpdateContext();

let navigate = useNavigate();

export const addNewUser = async (firstName, lastName, email, password) => {
  let newUser = { firstName, lastName, email, password };
  try {
    setData([...data, newUser]);
    navigate('/login');
  } catch (error) {
    throw new error;
  }
};