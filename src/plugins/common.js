import moment from 'moment';

// const baseUrl = ''

const relativeTime = (time) => {
  return moment(time).fromNow();
}

export default { relativeTime };