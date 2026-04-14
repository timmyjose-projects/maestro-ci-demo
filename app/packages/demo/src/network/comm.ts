import { BASE_BACKEND_URL } from '../config/config'
import { Operation } from '../features/Calculator'

type CalcInput = {
  x: number
  y: number
}

type CalcResponse = {
  res: number
}

export const sendRequest = async (oper: Operation, payload: CalcInput): Promise<CalcResponse | null> => {
  try {
    const url = `http://${BASE_BACKEND_URL}/${oper}`
    console.log(`Calling url = ${url}`)

    const res = fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type' : 'application/json'}
    })
    .then(resp => resp.json())
    .catch(err => null)

    return res
  } catch (err: any) {
    console.error(err)
    return null
  }
}