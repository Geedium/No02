import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from 'utils/database'
import { Note } from 'models/Note'

dbConnect()

export default async(req: NextApiRequest, res: NextApiResponse) : Promise<void> => {
  const { method } = req
  
  switch(method) {
    case 'GET':
      try {
        const notes = await Note.find({})
        res.status(200).json({ success: true, data: notes })
      } catch(error) {
        res.status(400).json({ success: false })
      } break
      case 'POST':
        try {
         // const note = await Note.create(req.body)
         // res.status(201).json({ success:true, data: note })
        } catch(error) {
          res.status(400).json({ success: false, log: error.message })
        } break
      default:
        res.status(400).json({ success: false })
        break
  }
}