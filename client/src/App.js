import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';

function App() {

  const [config, setConfig] = useState({
    data: {
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10
      }]
    },
    options: {
      cutout: 115
    }
  }
  );
  const [userDetail, setUserDetail] = useState({
    amount: "0",
    name: "Phurbu",
    type: "none"
  });

  useEffect(() => {

    // handleDetail(123)
    var item = config.data.datasets[0].data
    if (userDetail.type === "Expense") {
      item[2] += parseInt(userDetail.amount);
    }
    else if (userDetail.type === "Savings") {
      item[0] += parseInt(userDetail.amount);

    }
    else if (userDetail.type === "Investment") {
      item[1] += parseInt(userDetail.amount);

    }
    const dataa = {
      data: {
        datasets: [{
          data: item,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10
        }]
      },
      options: {
        cutout: 115
      }
    }

    setConfig(dataa);

  }, [userDetail])

  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* chart */}
          <Graph setConfig={setConfig} config={config} />
          {/* Form */}
          <Form setUserDetail={setUserDetail} />
        </div>
      </div>
    </div>
  );
}

export default App;