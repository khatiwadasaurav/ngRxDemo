import * as TextActions from '../actions/text.actions'
export type Action = TextActions.All
const defaultState = "Hello World"

export function languageReducer(state: string = defaultState, action: Action) {
    console.log(action.type, state)
    console.log('here')

    switch (action.type) {
        case TextActions.SPANISH:
            return state = 'Hola Mundo'
        case TextActions.FRENCH:
            return state = 'Bonjour le monde'
        case TextActions.NEPALI:
            return state = "नमस्कार संसार"
        default:
            return state
    }
}