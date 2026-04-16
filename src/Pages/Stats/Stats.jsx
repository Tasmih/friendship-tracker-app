import React, { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TimelineContext } from "../../Context/TimelineContext";

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  // Count interactions
  const counts = useMemo(() => {
    const textCount = timeline.filter((item) => item.type === "Text").length;
    const callCount = timeline.filter((item) => item.type === "Call").length;
    const videoCount = timeline.filter((item) => item.type === "Video").length;

    return {
      Text: textCount,
      Call: callCount,
      Video: videoCount,
    };
  }, [timeline]);

  // Data for Donut Chart
  const chartData = [
    { name: "Text", value: counts.Text, color: "#8b5cf6" },   
    { name: "Call", value: counts.Call, color: "#244D3F" },   
    { name: "Video", value: counts.Video, color: "#10b981" },
  ].filter((item) => item.value > 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 text-[#1F2A37]">
          Friendship Analytics
        </h1>

        {/* Main Card - White rounded box */}
        <div className="bg-white rounded-3xl shadow p-8 md:p-12">
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg mb-10">
            By Interaction Type
          </p>

          {/* Donut Chart */}
          <div className="flex justify-center rounded-md" style={{ height: "320px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={95}
                  outerRadius={135}
                  dataKey="value"
                  paddingAngle={6}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

         
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
              <span className="text-gray-700">Text</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#244D3F]"></div>
              <span className="text-gray-700">Call</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              <span className="text-gray-700">Video</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;