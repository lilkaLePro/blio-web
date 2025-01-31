import { ColumnsDef } from "@/components/table/interfaces";

export const useSubscriberColumn = (): ColumnsDef<any>[] => [
  {
    title: "Prenom",
    key: "firstname",
    render: ({firstname}) => firstname
  },
  {
    title: "Nom",
    key: "lastname",
    render: ({lastname}) => lastname
  },
  {
    title: "Email",
    key: "email",
    render: ({email}) => email
  },
  {
    title: "Numero",
    key: "email",
    render: ({phoneNumber}) => phoneNumber
  }
]

export interface SubscribersProps {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  job: string;
  userId?: string
}