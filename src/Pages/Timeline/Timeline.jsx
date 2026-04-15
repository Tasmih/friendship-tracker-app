import React, { useContext } from "react";
import { TimelineContext } from "../../Context/TimelineContext";

import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineHistory, MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);

  const getIcon = (type) => {
    if (type === "Call") {
      return (
        <BiSolidPhoneCall className="text-blue-500 text-xl" />
      );
    }

    if (type === "Text") {
      return (
        <MdOutlineTextsms className="text-green-500 text-xl" />
      );
    }

    if (type === "Video") {
      return (
        <MdOutlineVideocam className="text-purple-500 text-xl" />
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-bold mb-5 text-[#224D3F]">
          Timeline
        </h1>

        {timeline.length === 0 ? (
         <div className="bg-white rounded-2xl p-6 shadow text-center text-gray-500">
           <MdOutlineHistory className="mx-auto text-4xl mb-3 text-gray-400" />
            <p>No recent check-ins yet</p>
                 </div>
        ) : (
          <div className="space-y-3">

            {timeline.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl shadow flex items-center gap-4 hover:shadow-md transition"
              >
                <div className="p-3 rounded-full bg-gray-50">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;