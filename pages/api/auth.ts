import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { setCookie } from 'cookies-next'

const TOKEN_SECRET_KEY: string = process.env.TOKEN_SECRET_KEY ? process.env.TOKEN_SECRET_KEY : 'my secret killer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    await POST(req, res)
  if (req.method === 'GET')
    await GET(req, res)
}

function hashPassword(password: string) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');
  return hashedPassword;
}

const POST = async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.user.email,
        password: hashPassword(req.body.user.password)
      },
    })
    if (!user) {
      res.status(401).json({ error: 'User not found' })
    } else {
      const token = jwt.sign({ id: user.id }, TOKEN_SECRET_KEY)
      setCookie('t', token, { req, res, maxAge: 60 * 60 * 24 * 14 })
      res.json({ token, user })
    }
  } catch (error) {
    res.status(500).json({ error })
  } finally {
    await prisma.$disconnect()
  }
}

const GET = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      res.status(401).json({ error: 'No token' })
    } else {
      jwt.verify(token, TOKEN_SECRET_KEY, (err, decoded) => {
        console.log('token', token, err, decoded)
        if (err) {
          res.status(401).json({ error: 'No token' })
        } else {
          res.status(200).json({ decoded, ok: 'You are authorized' })
        }
      })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}
