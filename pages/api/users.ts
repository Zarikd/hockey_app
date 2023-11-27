import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'

function hashPassword(password: string) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  const hashedPassword = hash.digest('hex');
  return hashedPassword;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    await POST(req, res)
}

const POST = async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
  try {
    //Add unique salt for every user
    //Add second authetication gmail or yandex
    await prisma.user.create({
      data: {
        firstName: req.body.user.firstName,
        secondName: req.body.user.secondName,
        email: req.body.user.email,
        password: hashPassword(req.body.user.password),
      },
    })

  } catch (error) {
    res.status(500).json({ error })
  } finally {
    await prisma.$disconnect()
  }
}


