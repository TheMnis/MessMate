function PaymentHistory({ payments }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Payment History
      </h2>

      <div className="space-y-4">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="flex justify-between items-center border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            <div>

              <h3 className="font-semibold">
                {payment.invoice}
              </h3>

              <p className="text-gray-500 text-sm">
                {payment.date}
              </p>

            </div>

            <div className="text-right">

              <h3 className="font-bold">
                ₹{payment.amount}
              </h3>

              <span className="text-green-600 text-sm font-medium">
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