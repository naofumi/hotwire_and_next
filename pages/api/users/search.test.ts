import {createMocks} from 'node-mocks-http'
import handler from './search'
import {describe, test} from "@jest/globals";
import expect from "expect";
import {NextApiRequest, NextApiResponse} from "next";
import {User} from "@/repositories/user";

describe('api/users/search', () => {
  test('returns names matching query', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {query: 'Fuga'}
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getHeaders()["content-type"]).toEqual("application/json")
    const data = res._getJSONData()
    expect(data.length).toBe(4)
    const names =  data.map((u: User) => u.name)
    expect(names).toContain("Fugata Fugao")
    expect(names).not.toContain("Hogeta Hogeo")
  })

  test('returns all if query is blank', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: {query: ''}
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    const data = res._getJSONData()
    expect(data.length).toBe(10)
  })

  test('returns all if query is undefined', async () => {
    const {req, res} = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    const data = res._getJSONData()
    expect(data.length).toBe(10)
  })
})
