export const databaseDelay = parseInt(process.env.DATABASE_DELAY || "0")

export function sleep(ms: number) {
  if (ms > 0) {
    console.log(`sleeping ${ms} ms`)
  }
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function databaseSleep() {
  await sleep(databaseDelay)
}
