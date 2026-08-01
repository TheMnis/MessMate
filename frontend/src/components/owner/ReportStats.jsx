import StatsCard from "./StatsCard";

function ReportStats({
  stats,
}) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (

        <StatsCard
          key={stat.id}
          stat={stat}
        />

      ))}

    </div>

  );

}

export default ReportStats;