import React from 'react';

const Tab  =  ( props ) => {
    return(
        <div id={props.id} className={"tabcontent "+ ( props.active ? 'active' : '')}>
        <h3>Activity</h3>
        <p>Activity tab content comes here.</p>
      </div>
    )
};

export default Tab;