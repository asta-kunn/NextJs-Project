// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const route = (_req: NextApiRequest, res: NextApiResponse): any => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default route;