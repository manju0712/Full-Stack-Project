import passport from 'passport'
import passportLocal from 'passport-local'

//declaration merging
import GoogleIdTokenStrategy from 'passport-google-id-token'
import { GOOGLE_CLIENT_ID, JWT_SECRET } from '../util/secrets'
import JwtStrategy from 'passport-jwt'
import { Request, Response, NextFunction } from 'express'

//const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleIdTokenStrategy(
  {
    clientId: GOOGLE_CLIENT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    console.log('parsed token', parsedToken)
    console.log('google id', googleId)
    // const user = await User.findOrCreate(parsedToken)
    const user = {
      FirstName: 'manjusha',
      LastName: 'vankayala',
      createdAt: '2022-03-01',
      DOB: '2022-03-01',
      email: 'manjusha.vankayala@integrify.io',
    }

    done(null, user)
    // const done = (err, user) => {
    // req.user = user
    //}
  }
)

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (payload: any, done: any) => {
    console.log('payload', payload)
    const email = payload.email
    // const user = User.findByEmail(email)
    const user = {}
    done(null, user)
  }
)
