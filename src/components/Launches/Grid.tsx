import React from 'react';
///Launches
import {Launches, OwnProps} from './Launches';
////useQuery
import {useLaunchesQuery} from '../../generated/graphql';
///css
import './style.css'
import { Link } from 'react-router-dom';




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
        <div className="gridBtns">
        <h3 className="launch-head">Launches</h3>
        <Link to="/"><button className="backHome">Home</button></Link>
        </div>
        <Launches data={data} loading={loading} {...props}/>
      </div>
    );
}
