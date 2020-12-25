import React from 'react';
import { useLaunchinfoQuery } from '../../generated/graphql';
import '../Launches/style.css';
import { LaunchDetails } from './LaunchDetails';

export const LaunchDetailsContainer =()=> {
    
const {error, loading, data} = useLaunchinfoQuery({variables: {id: '14'}});

if(error){
    return <div className="something">
    <h3>Something went wrong</h3>
    <br />
    <ul>
      <li>check the internet routes, cables and modems</li>
      <li>Reconnecting to Wi-Fi</li>
      <li>Running Windows Network Diagnostics</li>
    </ul>
  </div>
}
return(
    <div>
        <h3 className="launchDetails">Launches Details</h3>
    <LaunchDetails data={data} loading={loading}/>
</div>
)
}