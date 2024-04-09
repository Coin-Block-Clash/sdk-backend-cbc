import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Coin Block Clash!')
})

export default app
