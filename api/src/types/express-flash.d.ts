/// <reference types="express" />

/**
 * This type definition augments existing definition
 * from @types/express-flash
 */
declare namespace Express {
  export interface Request {
    flash(event: string, message: any): any
    user?: {
      _id: string
      FirstName: string
      LastName: string
      createdAt: Date
      DOB: Date
      email: string
    }
  }
}

interface Flash {
  flash(type: string, message: any): void
}

declare module 'express-flash'
