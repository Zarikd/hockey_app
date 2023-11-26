import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    await POST(req, res)
}

const POST = async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
  try {

    await prisma.user.create({
      data: {
        firstName: req.body.user.firstName,
        secondName: req.body.user.secondName,
        email: req.body.user.email,
      },
    })

  } catch (error) {
    res.status(500).json({ error })
  } finally {
    await prisma.$disconnect()
  }
}


