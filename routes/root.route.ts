import { Router } from 'express'
import { levels } from '../controllers/level.controller'
import { question } from '../controllers/question.controller'
import { bios } from '../controllers/bio.controller'

const root: Router = Router()

root.get('/bios/', bios)
root.get('/levels/:levelType', levels)
root.get('/questions/:questionType', question)

export default root