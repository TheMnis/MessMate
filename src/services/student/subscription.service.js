const subscription = {
  plan: "Premium Student Plan",
  price: 3000,
  expiry: "30 Aug 2026",
  remainingDays: 29,
  progress: 82,
};

export const getSubscription = () => {
  return subscription;
};

export const renewSubscription = () => {
  return {
    success: true,
    message: "Subscription renewed successfully.",
  };
};

export const getPaymentHistory = () => {
  return [
    {
      id: 1,
      month: "August 2026",
      amount: 3000,
      status: "Paid",
      date: "01 Aug 2026",
    },
    {
      id: 2,
      month: "July 2026",
      amount: 3000,
      status: "Paid",
      date: "01 Jul 2026",
    },
    {
      id: 3,
      month: "June 2026",
      amount: 3000,
      status: "Paid",
      date: "01 Jun 2026",
    },
  ];
};