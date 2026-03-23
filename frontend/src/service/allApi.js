import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"


export const addDepositApi = async (reqBody) => {
    return await commonApi("POST", `${serverURL}/deposit`, reqBody)
}

export const withDrawApi = async (reqBody) => {
    return await commonApi("POST", `${serverURL}/withdraw`, reqBody)
}

export const getTransactionsApi = async () => {
    return await commonApi("GET", `${serverURL}/transaction`)
  }