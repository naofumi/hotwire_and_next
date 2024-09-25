import {createMocks} from 'node-mocks-http'
import handler from './index'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";
import {Cart} from "@/repositories/cart";

describe('api/cart', () => {
  test('returns an the cart that is set in the cookie', async () => {
    const cart = {"1": 1}
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      cookies: {cart: JSON.stringify(cart)}
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual(cart)
  })

  test('returns an empty object when no cookie is set', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual({})
  })

})
