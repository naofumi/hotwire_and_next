import {createMocks} from 'node-mocks-http'
import handler from './add_to_cart'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";

describe('api/add_to_cart', () => {
  test('sets product_id to cart cookie', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: {product_id: "1"}
    })

    await handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual({"1": 1})
    const encodedCartValue = encodeURIComponent(JSON.stringify({"1": 1}))
    expect(res._getHeaders()["set-cookie"]).toEqual([`cart=${encodedCartValue}; Path=/`])
  })

  test('fails if GET requst', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    })

    await expect(handler(req, res)).rejects.toThrow("Bad request")
  })

  test('when product_id is not set, sets "undefined"', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data).toEqual({"undefined": 1})
    const encodedCartValue = encodeURIComponent(JSON.stringify({"undefined": 1}))
    expect(res._getHeaders()["set-cookie"]).toEqual([`cart=${encodedCartValue}; Path=/`])
  })

})
