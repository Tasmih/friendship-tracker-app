import React from 'react';
import { RxPlus } from 'react-icons/rx';

const Banner = () => {
  return (
    <div className='min-h-[80vh]  text-center space-y-8 pt-[50px]'>
           <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800'>
  Friends to keep close in your life
</h2>

<p className='text-sm sm:text-base text-slate-500 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] mx-auto'>
  Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden sm:block"/>
  relationships that matter most.
</p>

<button className="bg-emerald-900 hover:bg-emerald-600 text-white px-4 sm:px-6 py-2 rounded-md 
                   flex items-center gap-3 text-base sm:text-lg font-semibold mx-auto mb-6
                   transition-all duration-200 shadow-lg shadow-emerald-200">
  <RxPlus /> Add a Friend
</button>


        <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">10</div>
            <div className="text-gray-500 font-medium text-lg">Total Friends</div>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">5</div>
            <div className="text-gray-500 font-medium text-lg">On Track</div>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">2</div>
            <div className="text-gray-500 font-medium text-lg">Need Attention</div>
          </div>

          
          <div className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:border-gray-200 hover:shadow-md transition-all">
            <div className="text-3xl font-semibold text-slate-500 mb-2">3</div>
            <div className="text-gray-500 font-medium text-lg">Interactions This Month</div>
          </div>

        </div>
      </div>


        
      </div>
      
    
  );
};

export default Banner;