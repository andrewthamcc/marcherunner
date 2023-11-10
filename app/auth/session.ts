import dotenv from 'dotenv'
import path from 'path'
import { createCookieSessionStorage } from '@remix-run/node'
dotenv.config({ path: path.resolve('./.env') })

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'marcherunner',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SECRET || ''],
    secure: process.env.NODE_ENV === 'production',
  },
})
