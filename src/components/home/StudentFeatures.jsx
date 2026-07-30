import {
  FaCheckCircle,
  FaBell,
  FaQrcode,
  FaWallet,
  FaClipboardCheck,
  FaMotorcycle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardCheck className="text-5xl text-green-600" />,
    title: "Smart Attendance",
    desc: "Mark Breakfast, Lunch and Dinner before deadline.",
  },
  {
    icon: <FaQrcode className="text-5xl text-green-600" />,
    title: "QR Scan Entry",
    desc: "Scan QR code for instant mess attendance.",
  },
  {
    icon: <FaBell className="text-5xl text-green-600" />,
    title: "Meal Reminder",
    desc: "Never miss your meal with instant notifications.",
  },
  {
    icon: <FaMotorcycle className="text-5xl text-green-600" />,
    title: "Food Delivery",
    desc: "Get your meal delivered directly to your room.",
  },
  {
    icon: <FaWallet className="text-5xl text-green-600" />,
    title: "Easy Subscription",
    desc: "Pay monthly and manage subscriptions easily.",
  },
  {
    icon: <FaCheckCircle className="text-5xl text-green-600" />,
    title: "Live Meal Status",
    desc: "Know today's menu and meal availability instantly.",
  },
];

function StudentFeatures() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center">
          Features For Students
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Everything a student needs to manage meals, attendance,
          subscriptions and notifications in one smart application.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default StudentFeatures;