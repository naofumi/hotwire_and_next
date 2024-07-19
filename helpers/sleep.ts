export const databaseDelay = parseInt(process.env.DATABASE_DELAY || "0")
export const responseDelay = parseInt(process.env.RESPONSE_DELAY || "0")

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function databaseSleep() {
  await sleep(databaseDelay)
}

export async function responseSleep() {
  await sleep(responseDelay)
}
