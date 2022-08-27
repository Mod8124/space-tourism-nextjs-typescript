// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import pages from './data.json';
import { IDestinations, ICrew, ITechnology, IMessage } from '../../src/interfaces/api/interface';

export default function handler( req: NextApiRequest, res: NextApiResponse< IDestinations[] |ICrew[] | ITechnology[]|IMessage>  ) {

  const space = req.query.space;

  switch (space) {
  case 'destinations':
    res.status(200).json(pages.destinations);
    break;
  case 'crew':
    res.status(200).json(pages.crew);
    break;
  case 'technology':
    res.status(200).json(pages.technology);
    break;
  default:
    res.status(400).json({
      message:'Error 404, only availble crew, destinations, technology'
    });
  }
}
