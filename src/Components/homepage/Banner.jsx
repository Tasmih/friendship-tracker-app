import React from 'react';
import { RxPlus } from 'react-icons/rx';

const Banner = () => {
  return (
    <div className='min-h-[80vh]  text-center space-y-8 pt-[50px]'>
           <h2 className='font-bold text-3xl text-gray-800'>Friends to keep close in your life </h2> 
           <p className='text-sm text-slate-500 max-w-[50%] mx-auto'>
           Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
relationships that matter most.
           </p>

        <button className="bg-emerald-900 hover:bg-emerald-600 text-white px-6 py-2 rounded-md 
                           flex items-center gap-3 text-lg font-semibold mx-auto  text-center mb-6
                           transition-all duration-200 shadow-lg shadow-emerald-200">
          <RxPlus /> Add a Friend
        </button>


        <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">10</div>
            <div className="text-gray-500 font-medium text-lg">Total Friends</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">3</div>
            <div className="text-gray-500 font-medium text-lg">On Track</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">6</div>
            <div className="text-gray-500 font-medium text-lg">Need Attention</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">12</div>
            <div className="text-gray-500 font-medium text-lg">Interactions This Month</div>
          </div>

        </div>
      </div>


        
      </div>
      
    
  );
};

export default Banner;