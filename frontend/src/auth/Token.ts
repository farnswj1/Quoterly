import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Credentials } from 'types';

interface DecodedToken {
  token_type: string,
  exp: number,
  iat: number,
  jti: string,
  user_id: number,
  is_staff: boolean
}

export default class Token {
  get(): string | null {
    let token: string | null = sessionStorage.getItem('access');

    if (token) {
      const decodedToken: DecodedToken = jwt_decode(token);
      const timestamp: any = new Date();

      if (timestamp >= decodedToken.exp / 1000) {
        const data = { refresh: sessionStorage.getItem('refresh') };
        axios.post(process.env.REACT_APP_API_URL + 'refresh', data)
          .then(response => response.data)
          .then(({ access }) => {
            sessionStorage.setItem('access', access);
            token = access;
          })
          .catch(error => {
            this.delete();
            token = null;
          });
      }
    }
    return token;
  }

  getUser(): object | null {
    const token: string | null = sessionStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  }

  set({ access, refresh }: Credentials): void {
    sessionStorage.setItem('token', access);
    sessionStorage.setItem('refresh', refresh);
  }

  delete(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refresh');
  }
}
