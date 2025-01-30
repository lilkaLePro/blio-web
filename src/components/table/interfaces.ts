import { ReactNode } from "react";

export interface ColumnsDef<T> {
  title: string;
  key?: string;
  render?: (data: T) => ReactNode;
}

export interface TableProps<T, M = any> {
  columns: ColumnsDef<T>[];
  data: T[];
};