// ===============================
// Current Subscription
// ===============================

const subscription = {
  id: 1,
  plan: "Premium Student Plan",
  price: 3000,
  duration: "Monthly",
  expiry: "30 Aug 2026",
  remainingDays: 29,
  progress: 82,
  status: "Active",
};

// ===============================
// Plan Features
// ===============================

const planFeatures = [
  {
    id: 1,
    title: "Unlimited Meals",
    description: "Breakfast, Lunch & Dinner included",
    icon: "meal",
    available: true,
  },
  {
    id: 2,
    title: "Attendance Tracking",
    description: "Daily attendance monitoring",
    icon: "attendance",
    available: true,
  },
  {
    id: 3,
    title: "Instant Notifications",
    description: "Get important updates instantly",
    icon: "notification",
    available: true,
  },
  {
    id: 4,
    title: "Priority Support",
    description: "Fast response from mess owner",
    icon: "support",
    available: true,
  },
  {
    id: 5,
    title: "Secure Account",
    description: "Protected profile & subscription",
    icon: "security",
    available: true,
  },
];

// ===============================
// Payment History
// ===============================

const paymentHistory = [
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

// ===============================
// Renew Information
// ===============================

const renewInfo = {
  renewalDate: "30 Aug 2026",
  discount: 10,
  autoRenew: false,
  offerText: "Offer valid till 30 August",
};

// ===============================
// Services
// ===============================

export const getSubscription = () => subscription;

export const getPlanFeatures = () => planFeatures;

export const getPaymentHistory = () => paymentHistory;

export const getRenewInfo = () => renewInfo;

export const renewSubscription = () => {
  return {
    success: true,
    message: "Subscription renewed successfully.",
  };
};
