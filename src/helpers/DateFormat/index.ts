import moment from 'moment';

const dateFormat = (value: string) => {
  return moment(value).format('DD MMMM YYYY LT');
};

export default dateFormat;
