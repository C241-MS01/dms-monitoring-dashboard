import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";

const videoId = "qYgogv4R8zg";
const provider = "youtube";

const VideoPlayer = () => {
    const ref = React.useRef<APITypes>(null);

    const plyrVideo =
      videoId && provider ? (
        <Plyr
          ref={ref}
          source={{
            type: "video",
            sources: [
              {
                src: `https://storage.googleapis.com/dms-detection-footages-c241-ms01/2024-06-13/40e4fe42-c6a9-48e0-8745-461380e2ae5d-7264c5c4-dcda-4592-b5a2-c2d71dda0055.mp4`,
                provider: provider,
              },
            ],
          }}
        />
      ) : null;

    return (
        <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
            <BreadCrumb title="Video Player" pageTitle="Plugins" />

            <div>
                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Preview Video Player</h6>
                            {plyrVideo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;

