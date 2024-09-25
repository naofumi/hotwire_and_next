import {createMocks} from 'node-mocks-http'
import handler from './products'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";
import {Product} from "@/repositories/product";

describe('api/products', () => {
  test('returns a list of products', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data.length).toBe(15)
    const names = data.map((p: Product) => p.name)
    expect(names).toContain("Chili Potatoes")
    expect(names).toContain("Fruity Jelly")
  })
})
