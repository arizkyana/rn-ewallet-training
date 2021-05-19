export interface IPayload {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  body?: any;
}

const baseURL = 'http://localhost:8000/api';

export const callAPI = async (payload: IPayload, token?: string) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (token) {
    Object.assign(headers, {
      Authorization: `Bearer ${token}`,
    });
  }

  const response = await fetch(`${baseURL}${payload.url}`, {
    headers,
    method: payload.method,
    body: JSON.stringify(payload.body),
  });
  const content = await response.json();
  return content;
};
