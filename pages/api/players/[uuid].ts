import type { NextApiRequest, NextApiResponse } from 'next'
import conn from 'lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method)
  if (req.method === 'PUT')
    await PUT(req, res)
}


const PUT = async function (req: NextApiRequest, res: NextApiResponse) {
  const { uuid } = req.query
  if (!conn) {
    res.status(500).json({
      error: 'DB connection fails'
    })
    return;
  }
  try {
    const query = `UPDATE "testTable"
      SET "playerData"= $1
      WHERE "uuidPlayer"=$2;`
    const result = await conn.query(query, [req.body, uuid]);
    res.status(200).json({ ok: true })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      error: 'Something happened'
    })
  }
}


