import { AppDataSource } from './../../src/data-source';
import { User } from './../../src/entity/User';
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    await POST(req, res)
}

function hashPassword(password: string) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');
  return hashedPassword;
}
const POST = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.body)
    const user = new User()
    user.email = req.body.user.email
    user.passwordHash = hashPassword(req.body.user.password)
    user.firstName = req.body.user.firstName
    user.secondName = req.body.user.secondName
    user.dateBirth = req.body.user.dateBirth
    console.log(user)
    const userRepository = AppDataSource.getRepository(User)
    console.log('дошли1')
    await userRepository.save(user)
    console.log('дошли2')
    // await AppDataSource.manager.save(user)
    console.log('user has been saved. user id is', user.guid)

    // const query = 'INSERT INTO "testTable" ("playerData") VALUES ($1)'
    // await conn.query(query, [{ playerName: req.body.playerName }]);
    // res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({ error })
  }
}


