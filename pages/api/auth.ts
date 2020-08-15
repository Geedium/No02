import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@utils/database'

dbConnect();

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    if(req.method == 'POST') {
        // INSERT INTO DB
    }

    res.status(200).json({ success:true })
}