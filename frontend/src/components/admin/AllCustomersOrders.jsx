import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrency, serverUrl } from "../../utils/helper";
import moment from "moment";
import { Link } from "react-router";

const AllCustomersOrders = () => {
  const [customersOrders, setCustomersOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCustomersOrders() {
    try {
      const response = await axios.get(`${serverUrl}/order/all-orders`);
      setCustomersOrders(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCustomersOrders();
  }, []);

  console.log(customersOrders);

  return (
    <section>
      <div className="relative overflow-x-auto mx-auto max-w-7xl pt-10">
        <h1 className="mb-10 text-center text-2xl font-semibold">All Orders</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Email
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Odrder Status
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Total Items
              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {customersOrders.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    {moment(new Date(item.createdAt)).format("DD-MM-YYYY")}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.customerDeliveryInfo.customerName}
                  </th>
                  <td className="px-6 py-4">
                    {item.customerDeliveryInfo.email}
                  </td>
                  <td className="px-6 py-4">{item.orderStatus}</td>
                  <td className="px-6 py-4">
                    {formatCurrency(item.userCartSummary.totalAmount)}
                  </td>
                  <td className="px-6 py-4">
                    {item.userCartSummary.totalCartItems}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/admin/${item._id}`}
                      className="px-3 py-0.5 bg-gray-200 rounded-md"
                    >
                      view
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllCustomersOrders;
