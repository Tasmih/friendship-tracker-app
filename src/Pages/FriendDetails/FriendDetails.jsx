import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseFriends from '../../Hooks/UseFriends';

import { TimelineContext } from '../../Context/TimelineContext';

import { FaArchive, FaRegEdit } from 'react-icons/fa';
import { HiBellSnooze } from 'react-icons/hi2';
import { RiDeleteBinFill } from 'react-icons/ri';

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';

import { DotLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = UseFriends();

  const { addTimeline } = useContext(TimelineContext);

  const expectedFriend = friends.find(
    (friend) => String(friend.id) === id
  );

  const handleCheckIn = (type) => {
    if (!expectedFriend) return;
    addTimeline(type, expectedFriend.name);
    toast.success(`${type} added successfully`);
  };

  const getStatusColor = (status) => {
    if (status === 'overdue') {
      return 'bg-red-100 text-red-700';
    }
    if (status === 'due soon') {
      return 'bg-yellow-100 text-yellow-700';
    }
    return 'bg-green-100 text-green-700';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <DotLoader color="#244d3f" />
      </div>
    );
  }

  if (!expectedFriend) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 text-center">
        Friend not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* left side */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 sticky top-6 lg:top-8">
              <div className="flex flex-col items-center text-center">

                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                  <img
                    src={expectedFriend?.picture}
                    alt="friend"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 break-words">
                  {expectedFriend?.name}
                </h1>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                  <span
                    className={`px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium rounded-full ${getStatusColor(
                      expectedFriend?.status
                    )}`}
                  >
                    {expectedFriend?.status}
                  </span>

                  <span className="px-4 sm:px-5 py-1.5 bg-green-100 text-green-700 text-xs sm:text-sm font-medium rounded-full">
                    FAMILY
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10">
                  Preferred:{' '}
                  <span className="font-medium text-gray-700 break-words">
                    {expectedFriend?.email}
                  </span>
                </div>

                <div className="w-full space-y-3">
                  <button className="w-full flex items-center justify-center gap-3 py-3 sm:py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium text-sm sm:text-base">
                    <HiBellSnooze /> Snooze 2 Weeks
                  </button>

                  <button className="w-full flex items-center justify-center gap-3 py-3 sm:py-4 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl text-gray-700 font-medium text-sm sm:text-base">
                    <FaArchive /> Archive
                  </button>

                  <button className="w-full flex items-center justify-center gap-3 py-3 sm:py-4 bg-white border border-red-200 hover:bg-red-50 text-red-600 rounded-2xl font-medium text-sm sm:text-base">
                    <RiDeleteBinFill /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="lg:col-span-7 space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-3xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-semibold">
                  {expectedFriend?.days_since_contact}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Days Since Contact
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-semibold">
                  {expectedFriend?.goal}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Goal (Days)
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 text-center shadow-sm">
                <div className="text-xs sm:text-sm font-semibold break-words">
                  {expectedFriend?.next_due_date}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Next Due
                </div>
              </div>
            </div>

            {/* goal */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Relationship Goal
                </h3>
                <button className="flex items-center gap-2 text-indigo-600 text-sm sm:text-base">
                  <FaRegEdit /> Edit
                </button>
              </div>
              <p className="text-sm sm:text-base text-gray-700">
                Connect every <b>30 days</b>
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-6">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">

                <button
                  onClick={() => handleCheckIn('Call')}
                  className="flex flex-col items-center py-6 sm:py-10 border rounded-2xl hover:bg-indigo-50 text-sm sm:text-base"
                >
                  <BiSolidPhoneCall className="text-3xl sm:text-5xl mb-2" />
                  Call
                </button>

                <button
                  onClick={() => handleCheckIn('Text')}
                  className="flex flex-col items-center py-6 sm:py-10 border rounded-2xl hover:bg-indigo-50 text-sm sm:text-base"
                >
                  <MdOutlineTextsms className="text-3xl sm:text-5xl mb-2" />
                  Text
                </button>

                <button
                  onClick={() => handleCheckIn('Video')}
                  className="flex flex-col items-center py-6 sm:py-10 border rounded-2xl hover:bg-indigo-50 text-sm sm:text-base"
                >
                  <MdOutlineVideocam className="text-3xl sm:text-5xl mb-2" />
                  Video
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;