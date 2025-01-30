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
]