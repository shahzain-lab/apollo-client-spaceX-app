import React from 'react';
///Launches
import {Launches} from './Launches';
////useQuery
import {useLaunchesQuery} from '../../generated/graphql';
///css
import './style.css'




export default function LaunchesGrid() {
/////working for query

const {data,error,loading} = useLaunchesQuery()
if(error){
   return <h3 style={{color: 'red'}}>error</h3>
}
  
  return (
      <div>
        <h3 className="launch-head">Launches</h3>
        <Launches data={data} loading={loading}/>
      </div>
    );
}
