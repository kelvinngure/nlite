import { createContext } from "react"

const TestContext = createContext()

const TestP = TestContext.Provider
const TestC = TestContext.Consumer

export default {TestP, TestC}