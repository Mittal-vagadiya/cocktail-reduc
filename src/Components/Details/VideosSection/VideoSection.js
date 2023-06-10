import React, { useState } from "react";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import Img from "../../lazyLoad/LazyLoad";
import { PlayIcon } from "../PlayButton";
import VideoPopup from "../../VideoPopup/VideoPopup";
import './VideoSection.css'

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    console.log('data', data)

    const skeleton = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };
    return (
        <>
            {data?.results?.length > 0 &&
                <>
                    <div className="sectionHeading">Official Videos</div>
                    <div className="videosSection">
                        <ContentWrapper>
                            {!loading ? (
                                <div className="videos">
                                    {data?.results?.map((video) => (
                                        <div
                                            key={video.id}
                                            className="videoItem"
                                            onClick={() => {
                                                setVideoId(video.key);
                                                setShow(true);
                                            }}
                                        >
                                            <div className="videoThumbnail">
                                                <Img
                                                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                                />
                                                <PlayIcon />
                                            </div>
                                            <div className="">{video.name}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="castSkeleton">
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                    {skeleton()}
                                </div>
                            )}
                        </ContentWrapper>
                        <VideoPopup
                            show={show}
                            setShow={setShow}
                            videoId={videoId}
                            setVideoId={setVideoId}
                        />
                    </div>
                </>
            }
        </>
    );
};

export default VideosSection;