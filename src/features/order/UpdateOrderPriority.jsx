import { useFetcher } from "react-router";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrderPriority() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrderPriority;
