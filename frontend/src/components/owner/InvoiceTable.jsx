function InvoiceTable({ payments }) {
  return (
    <div className="[background:var(--color-surface)] radius-2xl elevation-lg overflow-hidden">

      <table className="w-full">

        <thead className="[background:var(--color-primary)] [color:var(--color-text-inverse)]">

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
              className="border-b hover:[background:var(--color-surface-muted)]"
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

              <td className="p-4 text-center [color:var(--color-success)] font-semibold">
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
