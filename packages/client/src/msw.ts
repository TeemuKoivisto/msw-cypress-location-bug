import { rest, setupWorker } from 'msw'

const handlers = []

export const worker = setupWorker(...handlers)
