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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        
    
        <h1 className="text-3xl font-bold mb-8 text-[#1F2A37]">
          Friendship Analytics
        </h1>

        
        <div className="bg-white rounded-3xl shadow px-8 pt-8 pb-6 md:px-12 md:pt-10 md:pb-8">
          
    
          <p className="text-gray-600 text-lg mb-6">
            By Interaction Type
          </p>

          {/* chart */}
          <div
            className="flex justify-center rounded-md mt-4"
            style={{ height: "320px" }}
          >
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
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* legend */}
          <div className="flex justify-center gap-8 mt-2">
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