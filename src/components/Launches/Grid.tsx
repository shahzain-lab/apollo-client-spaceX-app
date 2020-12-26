import React from 'react';
///Launches
import {Launches, OwnProps} from './Launches';
////useQuery
import {useLaunchesQuery} from '../../generated/graphql';
///css
import './style.css'




export function LaunchesGrid(props: OwnProps) {
/////working for query

const {data,error,loading} = useLaunchesQuery()
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
  
  return (
      <div>
        <h3 className="launch-head">Launches</h3>
        <Launches data={data} loading={loading} {...props}/>
      </div>
    );
}
