import {sha256} from 'js-sha256';

const generateUID = (value: string) => {
  return sha256(value);
};
export default generateUID;
