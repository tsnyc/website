import React from "react";
import CardList from './CardList';
import organizers from '../data/organizers.js';


var iframeStyle = {
  height: '500px',
  width: '100%'
};

export default function CodeConduct() {
  return (
    <div className="code-conduct">
      <p>All Typescript NYC attendees, sponsors, speakers, volunteers and staff are required to follow the JSConf Code of Conduct. We take our Code of Conduct very seriously and it will be enforced by organizers during the entirety of all Typescript NYC events.</p>
      <iframe src="http://jsconf.com/codeofconduct.html" style={iframeStyle}></iframe>
      <p>If you need help for any reason please notify us through the following channels:</p>
      <ul>
        <li>Slack</li>
        <li>Discord</li>
        <li>Email</li>
        <li>Twitter</li>
        <li>Find an event staff member</li>
        <CardList organizers={organizers.list}/>
      </ul>
      <p>We monitor these channels frequently and give our prompt attention to each notification.</p>
    </div>
  )
}
