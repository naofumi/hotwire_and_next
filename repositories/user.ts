import {databaseSleep} from "@/helpers/sleep";

export type User = {
  name: string
  title: string
  email: string
  role: string
  password_digest: string
}

const users = [
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member", password_digest: "dbfcfd0d87220f629339bd3adcf452d083fde3246625fb3a93e314f833e20d37"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member", password_digest: "4bdd0bbfe3f4c52cc2c8ff02f1fef29663dd9938f230304915805af1fa71e968"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member", password_digest: "851ca7a5e2d4bce908ced2c566ce1ef6f1cc1921fcb4c270353cbc81f2e3b59c"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member", password_digest: "7bb3daccaf354e7e2f3471fc688c8b3d12d970f365816324c36c981bc3a99f25"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin", password_digest: "a724e9ff61764a77745f4f6ef4e50e1f758f436f3b4a1cf28cdaac97f1ffdfb9"},
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member", password_digest: "7cae2668f61b05445b86b3319ab84cd5d3630f76d956f5096ef680468073c3d8"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member", password_digest: "53dd02b72c4e7463b448e5374abedc168dcd200ad7e1221fe92d440c545859c6"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member", password_digest: "dff0b0e2a9a1f5eb91fee57eb6de7f7fef2ae871eb82cb34f7cd39b77c3da107"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member", password_digest: "a2bd21098ba5f97d152a97e89887e463f1d15d47fa0819151600dac4395b29b0"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin", password_digest: "a81c43c82465f2becf61da46f2108b893802cb3d2fb83ef70216ed41b5d873d7"},
]

export async function findUser(id:number): Promise<User> {
  if (!users[id]) throw `no User found for ${id}`

  await databaseSleep()
  return users[id]
}

export async function allUsers(): Promise<User[]> {
  await databaseSleep()
  return users
}
