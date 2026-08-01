function PaymentHistory({ payments }) {
  return (
    <div className="bg-surface radius-2xl elevation-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Payment History
      </h2>

      <div className="space-y-4">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="flex justify-between items-center border radius-xl p-4 hover:bg-surface-muted transition"
          >

            <div>

              <h3 className="font-semibold">
                {payment.invoice}
              </h3>

              <p className="text-text-muted text-sm">
                {payment.date}
              </p>

            </div>

            <div className="text-right">

              <h3 className="font-bold">
                ₹{payment.amount}
              </h3>

              <span className="text-success text-sm font-medium">
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