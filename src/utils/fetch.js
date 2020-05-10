const myFetch = async (url, options) => {
  const response = await fetch(url, options);
  if (response.status >= 500) throw new Error(response);

  let total;
  for(let entry of response.headers.entries()) {
    if (entry[0] === 'x-total-count') {
      total = Number(entry[1]);
    }
  }

  const body = await response.json();
  const result = {
    body,
    status:     response.status,
    statusText: response.statusText,
    ...(total ? { total } : {}),
  };

  return response.status >= 400 ? { error: result } : { success: result };
};

const generateOptions = (options = {}) => ({
  ...options,
  mode: 'cors',
  headers: {
    'content-type': 'application/json',
    ...options.headers,
  },
  credentials: 'include',
  method:      options.method || 'GET',
  body:        JSON.stringify(options.body),
});

export const get    = (url, options)       => myFetch(url, generateOptions(options));
export const remove = (url, options)       => myFetch(url, generateOptions({ ...options, method:       'DELETE' }));
export const post   = (url, body, options) => myFetch(url, generateOptions({ ...options, body, method: 'POST' }));
export const put    = (url, body, options) => myFetch(url, generateOptions({ ...options, body, method: 'PUT' }));
export const patch  = (url, body, options) => myFetch(url, generateOptions({ ...options, body, method: 'PATCH' }));

export default myFetch;
