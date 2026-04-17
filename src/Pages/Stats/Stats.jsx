import React, { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TimelineContext } from "../../Context/TimelineContext";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const counts = {
    Text: 0,
    Call: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const chartData = [
    { name: "Text", value: counts.Text, color: "#8b5cf6" },
    { name: "Call", value: counts.Call, color: "#244D3F" },
    { name: "Video", value: counts.Video, color: "#10b981" },
  ].filter((item) => item.value > 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#1F2A37] text-center sm:text-left">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-3xl shadow px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-6 md:px-12 md:pt-10 md:pb-8">

          <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 text-center sm:text-left">
            By Interaction Type
          </p>

          <div className="flex justify-center mt-4 h-[220px] sm:h-[280px] md:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                  paddingAngle={6}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
              <span className="text-sm sm:text-base text-gray-700">Text</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#244D3F]"></div>
              <span className="text-sm sm:text-base text-gray-700">Call</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              <span className="text-sm sm:text-base text-gray-700">Video</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;