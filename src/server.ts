import { config } from 'dotenv'
import { App } from './App'

config() 

const PORT = process.env.PORT ?? 3003

new App().start(PORT)
