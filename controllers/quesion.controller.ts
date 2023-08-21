import { QuestionType } from '../type'
import {
    randomQuestions, allQuestions
} from '../db/questions/random.question'
import { Request, Response } from 'express'
import genRandom from '../utils/random.util'
const expressAsyncHandler = require('express-async-handler')


const selectQuestion = (questionType: QuestionType): string[] => {
    switch (questionType) {
        case 'nasty':
            return randomQuestions.nasty
        case 'normal':
            return randomQuestions.normal
        case 'relationship':
            return randomQuestions.relationship
        case 'all':
            return allQuestions
        default:
            return []
    }
}

const question = expressAsyncHandler(async (req: Request, res: Response) => {
    const { choice } = req.query
    const { questionType } = req.params
    const getQuestions = selectQuestion(questionType)

    if (!choice) {
        res.status(200).json({
            questions: getQuestions
        })
        return
    }

    if (!Number(choice)) {
        return res.status(400).json({
            msg: "Invalid Choice Made."
        })
    }

    if (choice === "1") {
        res.status(200).json({
            question: genRandom(getQuestions)
        })
        return
    }


    res.status(200).json({
        question: getQuestions[Number(choice) > getQuestions.length ? -1 : Number(choice)]
    })
})

export { question }