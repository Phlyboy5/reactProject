import React from 'react'
export default function Labels({config}) {

    
    const item = config.data.datasets[0].data;
    
    const sav = parseInt(item[0]); 
    const inv = parseInt(item[1]); 
    const ep = parseInt(item[2]); 
    const total = sav+inv+ep;

    const percentage = (val) =>{
        if(!val){
            return 0;
        }

        var data = ((val/total)*100).toFixed(2);
        return data;
    }

    const obj = [{
        type: "Savings",
        color:'rgb(255, 99, 132)',
        percent: percentage(sav)
    },
    {
        type: "Investment",
        color:'rgb(54, 162, 235)',
        percent:percentage(inv)
    },
    {
        type: "Expense",
        color:'rgb(255, 205, 86)',
        percent:percentage(ep)
    }]

  return (
    <>
    {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
    </>
  )
}

function LabelComponent({data}){
    if(!data) return <></>
    return(
    <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background:data.color??'yellow'}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}