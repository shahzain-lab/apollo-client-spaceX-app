import React from 'react';
import {LaunchesQuery}  from '../../generated/graphql';

interface Props{
    data?: LaunchesQuery;
}

export const Launches: React.FC<Props>=({data})=> {

    return(
        <div>
        <h3>Launches</h3>
           {!!data?.launches &&data.launches.map((launch,i) => !!launch &&(
               <div key={i}>
                   {launch.mission_name}
                   {console.log(launch.mission_name)}
               </div>
           ))}
        </div>
    )
}