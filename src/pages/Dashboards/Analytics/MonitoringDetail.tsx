import React from 'react'



const MonitoringDetail = ()=>{
    return (
      <div className="xl:col-span-8">
        <div className="card">
          <div className="card-body">
            <h6 className="text-15 mb-4">Monitoring Detail</h6>
            <div className="flex justify-center mb-2">
              <iframe
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
};
export default MonitoringDetail;