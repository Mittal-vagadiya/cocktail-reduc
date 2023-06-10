import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import "./VideoPopup.css";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    
    const hidePopup = () => {
        setShow(false)
        setVideoId(null)
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
                // Check if the pressed key is "Esc" (key code 27)
                hidePopup(); // Call the hidePopup function to close the popup
            }
        };
        if (show) {
            document.addEventListener("keydown", handleKeyDown); // Add event listener when the popup is visible
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown); // Remove event listener when the component unmounts or popup is hidden
        };
    }, [show, hidePopup]);

    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                // playing={true}
                />
            </div>
        </div>
    );
};

export default VideoPopup;