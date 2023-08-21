import levelObj from '../db/levels'
import { Level, LevelType } from '../type'

const selectLevel = (levelType: LevelType): Level[] => {
    switch (levelType) {
        case 'message':
            return levelObj.message
        case 'poll':
            return levelObj.poll
        case 'overall':
            return levelObj.overall
        default:
            return []
    }
}

export default selectLevel