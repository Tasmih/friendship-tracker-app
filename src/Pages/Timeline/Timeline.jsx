import React, { useContext, useState } from "react";
import { TimelineContext } from "../../Context/TimelineContext";

import { BiSolidPhoneCall } from "react-icons/bi";
import {
  MdOutlineHistory,
  MdOutlineTextsms,
  MdOutlineVideocam,
} from "react-icons/md";

const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTimeline = timeline.filter((item) => {
    if (searchTerm === "") return true;
    const search = searchTerm.toLowerCase().trim();

    if (search === "call") return item.type === "Call";
    if (search === "text") return item.type === "Text";
    if (search === "video") return item.type === "Video";

    return item.title.toLowerCase().includes(search);
  });

  const getIcon = (type) => {
    if (type === "Call") {
      return <BiSolidPhoneCall className="text-blue-500 text-xl sm:text-2xl" />;
    }

    if (type === "Text") {
      return <MdOutlineTextsms className="text-green-500 text-xl sm:text-2xl" />;
    }

    if (type === "Video") {
      return <MdOutlineVideocam className="text-purple-500 text-xl sm:text-2xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-xl sm:text-2xl font-bold mb-5 text-[#224D3F] text-center sm:text-left">
          Timeline
        </h1>

        <div className="flex mb-4">
          <label className="input input-bordered flex items-center gap-3 bg-white w-full sm:w-[60%] mx-auto sm:mx-0">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="text"
              placeholder="Search......"
              className="text-sm w-full outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        {timeline.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 shadow text-center text-gray-500">
            <MdOutlineHistory className="mx-auto text-4xl mb-3 text-gray-400" />
            <p>No recent check-ins yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 sm:p-4 rounded-2xl shadow flex items-center gap-3 sm:gap-4 hover:shadow-md transition"
              >
                <div className="p-2 sm:p-3 rounded-full bg-gray-50">
                  {getIcon(item.type)}
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-gray-800 text-sm sm:text-base truncate">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
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