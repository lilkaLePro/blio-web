import { PlusSquare } from "lucide-react";
import { Card } from "./components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useNavigate } from "react-router";

export const data = [
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
]

export const Books = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-20 my-3 flex justify-between px-5">
        <div className="max-w-lg w-full">
          <Input />
        </div>
        <Button icon={<PlusSquare />} onClick={() => navigate("/dashboard/books/add")}> Ajouter un livre </Button>
      </div>
      <div className=" grid grid-cols-4 gap-2 px-5">
      {data.map((data, index) => (
        <div>
          <Card key={index} />
        </div>
      ))}
    </div>
    </div>
  )
};
