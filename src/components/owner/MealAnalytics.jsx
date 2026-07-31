import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const mealData = [
  { name: "Breakfast", value: 35 },
  { name: "Lunch", value: 40 },
  { name: "Dinner", value: 25 },
];

const COLORS = [
  "#16a34a",
  "#2563eb",
  "#f97316",
];

function MealAnalytics() {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Meal Analytics
      </h2>

      <div className="h-[320px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={mealData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {mealData.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default MealAnalytics;