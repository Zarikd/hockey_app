import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
        id: uuidv4(),
        playerName: 'Middle Anton'
    },
    {
        id: uuidv4(),
        playerName: 'Zarik Dima'
    }])
}