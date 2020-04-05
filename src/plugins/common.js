import moment from "moment";
import Axios from "axios";

const accesstoken = "3ca25fe2-bf41-4e98-8f9c-b32246f3325b";

const relativeTime = time => {
  return moment(time).fromNow();
};

const http = Axios.create({
  baseURL: "https://cnodejs.org/api/v1"
});

export default {
  relativeTime,
  http,
  accesstoken
};
