import Table from "@/components/table/table"
import { useSubscriberColumn } from "./data"
import { useSubcriber } from "./subscribers.hook";
import { userCurrentUserStore } from "@/main/auth/store";


export const Subscribers = () => {
  
  const id = userCurrentUserStore.use.id();

  const column = useSubscriberColumn();
  const { allSubcribers } = useSubcriber(id)

  const SubcribersData = allSubcribers;
  

  return (
    <div>
      <div className="border h-32 my-3">

      </div>
      <Table 
        columns={column}
        data={SubcribersData}
      />
    </div>
  )
}