// @flow
type Data = {
  [key: string]: string,
};
type Options = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  query?: Data,
};

const defaultOptions = { method: 'GET' };

const getParams = (params: Data) =>
  Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

const parseJSON = response => response.json();

const checkStatus = async response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
};

export default (url: string, options: Options = defaultOptions): Promise<*> => {
  const { query, ...requestData } = options;
  const getUrl = query ? `${url}?${getParams(query)}` : url;
  // TODO: Fetch API should be Flow typed
  // flow-disable-next-line
  return fetch(getUrl, requestData)
    .then(checkStatus)
    .then(parseJSON);
};
