const subscriptionData = {
  currentPlan: "Professional",
  amount: 299,
  billingCycle: "Monthly",
  expiryDate: "31 Dec 2026",
  status: "Active",
};

const paymentHistory = [
  {
    id: 1,
    invoice: "INV-1001",
    amount: 299,
    date: "01 Jul 2026",
    status: "Paid",
  },
  {
    id: 2,
    invoice: "INV-1002",
    amount: 299,
    date: "01 Jun 2026",
    status: "Paid",
  },
  {
    id: 3,
    invoice: "INV-1003",
    amount: 299,
    date: "01 May 2026",
    status: "Paid",
  },
];

export const getSubscription = () => {
  return subscriptionData;
};

export const getPaymentHistory = () => {
  return paymentHistory;
};
