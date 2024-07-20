import {findUser, User} from "@/repositories/user";

export type UserDetail = {
  hobby: string
  jobGrade: string
  joinedAt: string
}
const userDetails = [
  {hobby: "Reading", jobGrade: "Junior", joinedAt: "2024-01-01"},
  {hobby: "Eating", jobGrade: "Senior", joinedAt: "2026-01-01"},
  {hobby: "Fishing", jobGrade: "Middle", joinedAt: "2023-01-01"},
  {hobby: "Karaoke", jobGrade: "Junior", joinedAt: "2024-01-01"},
  {hobby: "Cooking", jobGrade: "Middle", joinedAt: "2022-01-01"},
  {hobby: "Reading", jobGrade: "Junior", joinedAt: "2024-01-01"},
  {hobby: "Eating", jobGrade: "Senior", joinedAt: "2026-01-01"},
  {hobby: "Fishing", jobGrade: "Middle", joinedAt: "2023-01-01"},
  {hobby: "Karaoke", jobGrade: "Junior", joinedAt: "2024-01-01"},
  {hobby: "Cooking", jobGrade: "Middle", joinedAt: "2022-01-01"},
]

export async function findUserWithDetails(id: number): Promise<User & UserDetail> {
  const userAttributes = await findUser(id)
  const userDetailAttributes = userDetails[id]
  return {...userAttributes, ...userDetailAttributes}
}
