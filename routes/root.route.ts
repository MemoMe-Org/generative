import { Router } from 'express'
import { levels } from '../controllers/level.controller'
import { question } from '../controllers/question.controller'

const root: Router = Router()

root.get('/levels/:levelType', levels)
root.get('/questions/:questionType', question)

export default root