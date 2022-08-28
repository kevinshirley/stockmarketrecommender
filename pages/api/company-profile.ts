// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const finnhub = require('finnhub');

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = 'cc5mnfiad3i9rj8sv1og';
  const finnhubClient = new finnhub.DefaultApi();

  finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error: any, data: any, response: any) => {
    res.status(200).json(data);
  });
}
