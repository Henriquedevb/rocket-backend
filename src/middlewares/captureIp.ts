import request from 'request';

export interface IBody {
  ip: string;
  regiao: string;
  city: string;
  region: string;
  lat: string;
  long: string;
  org: string;
}

export async function captureIpUser(url: string) {
  request(url, (err, response, body) => {
    let ipInfo = JSON.parse(body);
    return ipInfo;
  });
}
