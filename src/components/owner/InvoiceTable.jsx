function InvoiceTable({ payments }) {
  return (
    <div className="bg-surface radius-2xl elevation-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-primary text-text-inverse">

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
              className="border-b hover:bg-surface-muted"
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

              <td className="p-4 text-center text-success font-semibold">
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