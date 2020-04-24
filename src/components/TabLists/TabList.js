import React, { useState } from 'react';
import * as TabConfig from './../../configs/tabListConfigs.json';
import { launchTabSequence } from './../../helper/componentManager';

const TabList  =  ( props ) => {

const [showSearchFlight, setShowSearchFlight] = useState(false);
const toggleShowSearchFlight = () => {
    setShowSearchFlight(!showSearchFlight);
}
const handelTabChange = ( e, id ) => {
    TabConfig.tabListConfig.map((item) => {
        const target = document.getElementById(id);
        const tab = document.getElementById(item.id);
        if( item.id === id ) {
           target.classList.add('active');
        } else {
            if ( tab.classList.contains('active') ) {
               tab.classList.remove('active');
            }
        }
        return '';
    })
}

const Tabs = () => {
    return (
        <div className="tab">
            {TabConfig.tabListConfig.map(( elem, index ) => {
                return <button key={index} className="tablinks" onClick={( event ) => handelTabChange( event, elem.id )}>{elem.title}</button>
             })}
        </div>
    )
}

const TabsContent = ( props ) => {
    return (
        <div>
        {TabConfig.tabListConfig.map(( elem ) => {
            const Component = launchTabSequence.get(elem.renderComponent);
            return <Component showSearchFlight={props.showSearchFlight} toggleShowSearchFlight={props.toggleShowSearchFlight} key={elem.key} id={elem.id} active={elem.active}/>
         })}
         </div>
    )
}
  
return (
        <div>
            {!showSearchFlight ? <Tabs /> : ''}
            <TabsContent showSearchFlight={showSearchFlight} toggleShowSearchFlight={toggleShowSearchFlight}/>
        </div>
     )
};

export default TabList;