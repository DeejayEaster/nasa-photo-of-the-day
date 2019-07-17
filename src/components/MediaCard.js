import React from "react";

const MediaCard = ({ info }) => {
  const getMedia = () => {
    // check to see if info is image or video. API can return either depending on the date
    if (info.media_type === "image") {
      return <img src={info.url} alt="temp" width="500" height="500" />;
    } else if (info.media_type === "video") {
      return <iframe src={info.url} width="1000" height="500" title="temp" />;
    }
  };

  return (
    // returning the jsx component
    <section className="card">{getMedia()}</section>
  );
};

export default MediaCard;
