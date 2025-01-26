import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = "http://localhost:4000/api";

interface IUser { firstname: string, lastname: string}
export const getFullName = (user: IUser) => {
  return (`${user?.firstname} ${" "} ${user?.lastname}`)
}