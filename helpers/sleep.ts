export const databaseDelay = parseInt(process.env.DATABASE_DELAY || "0")

export const defaultDelay = 300

export function sleep(ms: number, options={no_log: false}) {
  if (ms > 0 && !options?.no_log) {
    console.log(`sleeping ${ms} ms`)
  }
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function databaseSleep() {
  await sleep(databaseDelay)
}
