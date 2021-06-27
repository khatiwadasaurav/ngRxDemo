import { Action } from '@ngrx/store'

export const FRENCH = 'FRENCH';
export const SPANISH = 'SPANISH';
export const NEPALI = 'NEPALI';

export class French implements Action {
    readonly type = FRENCH
}
export class Spanish implements Action {
    readonly type = SPANISH
}
export class Nepali implements Action {
    readonly type = NEPALI
}


export type All = French | Spanish | Nepali