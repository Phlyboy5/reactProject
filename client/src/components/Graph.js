import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);

export default function Graph({config , setConfig}) {
  // console.log(props.config)


  let sum= config.data.datasets[0];
  return (
    <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
                <Doughnut {...config}></Doughnut>
                <h3 className='mb-4 font-bold title'>Total
                <span className='block text-3xl text-emerald-400'>{sum.data[0]+sum.data[1]+sum.data[2]}₹</span>
                </h3>
            </div>

            <div className="flex flex-col py-10 gap-4">
                {/* Lables */}
                <Labels config = {config} />
            </div>
        </div>
    </div>
  )
}
