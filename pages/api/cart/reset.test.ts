import {createMocks} from 'node-mocks-http'
import handler from './reset'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";

describe('api/reset', () => {
  test('clears the current cart cookie', async () => {
    const cart = {"1": 1}
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      cookies: {cart: JSON.stringify(cart)}
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual({})
    expect(res.cookies.cart).toBe(undefined)
  })

  test('returns an empty object when no cookie is set', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual({})
  })

})
