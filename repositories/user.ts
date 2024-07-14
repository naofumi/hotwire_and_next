export type User = {
  name: string
  title: string
  email: string
  role: string
}

const users = [
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin"},
  {name: "Hogeta Hogeo", title: "Front-end developer", email: "hogeta@example.com", role: "Member"},
  {name: "Hogehara Hogeko", title: "Designer", email: "hogeko@example.com", role: "Member"},
  {name: "Fugata Fugao", title: "PM", email: "fugata@example.com", role: "Member"},
  {name: "Fugakawa Fugako", title: "Back-end developer", email: "fugako@example.com", role: "Member"},
  {name: "Piyota Piyogishi", title: "IT administrator", email: "piyota@example.com", role: "Admin"},
]

export function findUser(id:number) {
  if (!users[id]) throw `no User found for ${id}`

  return users[id]
}

export function allUsers() {
  return users
}
