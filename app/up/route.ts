export async function GET(req: Request, res: Response) {
  return new Response("I'm OK!", {status: 200})
}
