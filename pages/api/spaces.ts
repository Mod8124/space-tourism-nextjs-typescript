// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import pages from './data.json';
import { ISpace } from '../../src/interfaces/api/interface';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISpace>
) {
  res.status(200).json(pages);
}
