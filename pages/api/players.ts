import type {NextApiRequest, NextApiResponse} from 'next'
import conn from '@/lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET')
    await GET(req, res)
  else if (req.method === 'POST')
    await POST(req, res)
  else if (req.method === 'DELETE')
    await _DELETE(req, res)
}

const GET = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = 'SELECT * FROM "testTable"'
    const result = await conn.query(query)
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({error})
  }
}

const POST = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = 'INSERT INTO "testTable" ("playerData") VALUES ($1)'
    await conn.query(query, [{playerName: req.body.playerName}]);
    res.status(200).json({ok: true})
  } catch (error) {
    res.status(500).json({error})
  }
}

const _DELETE = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = 'DELETE FROM "testTable" WHERE "uuidPlayer"=$1'
    await conn.query(query, [req.body.uuidPlayer]);
    res.status(200).json({ok: true})
  } catch (error) {
    res.status(500).json({error})
  }
}