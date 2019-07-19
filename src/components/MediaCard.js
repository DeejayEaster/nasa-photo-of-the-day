import React from "react";
import { Card } from "semantic-ui-react";

const MediaCard = ({ info }) => {
  const getMedia = () => {
    // check to see if info is image or video. API can return either depending on the date
    if (info.media_type === "image") {
      return <img src={info.url} alt="temp" width="100%" height="100%" />;
    } else if (info.media_type === "video") {
      return <iframe src={info.url} width="1000" height="500" title="temp" />;
    }
  };

  return (
    // returning the jsx component
    // <div className="ui centered card">
    //   <div className="image">{getMedia()}</div>

    //   <div className="content">
    //     <h1 className="header">{info.title}</h1>
    //     <div className="meta">
    //       <span className="date">{info.date}</span>
    //     </div>
    //     <p className="description">{info.explanation}</p>
    //   </div>
    // </div>
    <Card className="card-contain">
      <div className="image">{getMedia()}</div>
      <Card.Content>
        <Card.Header className="small-header">{info.title}</Card.Header>
        <Card.Meta>
          <span className="date">{info.date}</span>
        </Card.Meta>
        <Card.Description>{info.explanation} </Card.Description>
      </Card.Content>
    </Card>
  );
};

// import React from 'react'

// const CardExampleCard = () => (

// )

export default MediaCard;

// <div className="ui card">
//   <div className="image">
//     <img src="/images/avatar2/large/kristy.png">
//   </div>
//   <div className="content">
//     <a className="header">Kristy</a>
//     <div className="meta">
//       <span className="date">Joined in 2013</span>
//     </div>
//     <div className="description">
//       Kristy is an art director living in New York.
//     </div>
//   </div>
//   <div className="extra content">
//     <a>
//       <i className="user icon"></i>
//       22 Friends
//     </a>
//   </div>
// </div>
