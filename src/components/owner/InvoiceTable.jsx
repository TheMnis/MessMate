function InvoiceTable({ payments }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-600 text-white">

          <tr>

            <th className="p-4 text-left">
              Invoice
            </th>

            <th className="p-4">
              Date
            </th>

            <th className="p-4">
              Amount
            </th>

            <th className="p-4">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr
              key={payment.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">
                {payment.invoice}
              </td>

              <td className="p-4 text-center">
                {payment.date}
              </td>

              <td className="p-4 text-center">
                ₹{payment.amount}
              </td>

              <td className="p-4 text-center text-green-600 font-semibold">
                {payment.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default InvoiceTable;