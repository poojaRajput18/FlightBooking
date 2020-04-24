import React from 'react';

const Tab  =  ( props ) => {
    return(
        <div id={props.id} className={"tabcontent "+ ( props.active ? 'active' : '')}>
        <h3>Cab</h3>
        <p>Cab tab content comes here.</p>
      </div>
    )
};

export default Tab;