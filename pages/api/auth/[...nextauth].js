import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
        })
    ],
    database: "mongodb://testUser:test123@85.232.131.161:27017/test?authSource=test"
}

export default(req, res) => NextAuth(req, res, options)