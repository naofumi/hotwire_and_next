import {createMocks} from 'node-mocks-http'
import handler from './index'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";
import {User} from "@/repositories/user";
import {beforeEach} from "node:test";

describe('api/users', () => {
  test('returns a list of users', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data.length).toBe(10)
    const names = data.map((u: User) => u.name)
    expect(names).toContain("Hogeta Hogeo")
    expect(names).toContain("Piyota Piyogishi")
  })
})
