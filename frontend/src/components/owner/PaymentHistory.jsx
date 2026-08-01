function PaymentHistory({ payments }) {
  return (
    <div className="[background:var(--color-surface)] radius-2xl elevation-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Payment History
      </h2>

      <div className="space-y-4">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="flex justify-between items-center border radius-xl p-4 hover:[background:var(--color-surface-muted)] transition"
          >

            <div>

              <h3 className="font-semibold">
                {payment.invoice}
              </h3>

              <p className="[color:var(--color-text-muted)] text-sm">
                {payment.date}
              </p>

            </div>

            <div className="text-right">

              <h3 className="font-bold">
                ₹{payment.amount}
              </h3>

              <span className="[color:var(--color-success)] text-sm font-medium">
                {payment.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PaymentHistory;
