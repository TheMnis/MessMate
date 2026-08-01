const activities = [
  "Revenue updated",
  "15 new students joined",
  "Inventory restocked",
  "Subscription renewed",
  "Menu updated",
];

function RecentActivity() {

  return (

    <div className="[background:var(--color-surface)] radius-3xl elevation-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((activity,index)=>(

          <div
            key={index}
            className="border-l-4 [border-color:var(--color-primary)] pl-4 py-2"
          >

            {activity}

          </div>

        ))}

      </div>

    </div>

  );

}

export default RecentActivity;