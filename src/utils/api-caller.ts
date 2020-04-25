import { Post } from "redux/types";
import { HTTP_METHODS } from "../constants";

const apiURL = "https://wf-challenge-d71u47i7y8.herokuapp.com/api/v1/posts/";

const callApi = async (method: string = HTTP_METHODS.GET, id?: number, body?: Post): Promise<Post> => {
  const options: RequestInit = { method };
  const url = id ? `${apiURL}${id}` : apiURL;
  if(method === HTTP_METHODS.POST || method === HTTP_METHODS.PUT) {
    options.headers = {'Content-Type': 'application/json'};
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  return await response.json();
}

export default callApi;