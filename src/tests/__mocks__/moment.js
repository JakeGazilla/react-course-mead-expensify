const moment = require.requireActual('moment'); // this is the import

export default (timestamp = 0) => {
  return moment(timestamp);
};