import { Router } from 'express'
import { question } from '../controllers/quesion.controller'

const root: Router = Router()

root.get('/questions/:questionType', question)

export default root