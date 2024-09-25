import {createMocks} from 'node-mocks-http'
import handler from './user'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";
import {User} from "@/repositories/user";

describe('api/user', () => {
  test('returns a user when ID is set', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {id: "1"}
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data.name).toEqual("Hogeta Hogeo")
  })

  test('throws when no ID is set', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    })

    await expect(handler(req, res)).rejects.toEqual("no User found for NaN")
  })
})
