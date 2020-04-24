import React, { useState } from 'react';
import { flightsList } from './../../../configs/FlightsList.json';
import PriceClass from './PriceClass';
import SortFlightComponent from './SortFlight';

const SearchSort = (props) => {

return (
        <div className="pill-nav">
            <a href="#sort" onClick={props.toggleSortView} className="pill-sort">Sort</a>
            <a href="#filter" className="pill-filter">Filter</a>
        </div>
);
};

const SearchFlight = (props, ref) => {
    const [showSortView, setShowSortView] = useState(false);
    const [fList, setFList] = useState(flightsList);
    const modifyFList = (newList) => {
        setFList( newList )
    }
    //const fList = flightsList;
    console.log(fList);
    const toggleSortView = () => {
        setShowSortView(!showSortView);
    };

    React.useEffect(() => {

    });

    return (
        <div>
            {!showSortView ? <><div className='headerContainer'>
            <button onClick={props.toggleShowSearchFlight}>Back</button>
            <div>
                <div className="sourceDestinationLabel">DEL -> CPT</div>
                <div>Jul 24 - Jul 30 | 1 Adult</div>
            </div>
            <button>Edit</button>
            </div>
           {fList.map((item, index) => {
                return (
                <div key={index} className='result-container'>
                    <div >
                        <div className='airLineName' >{item.airLineName}</div>
                        <div className='flight-result-container'>
                            <div>
                                <h4>{item.sourceTime}</h4>
                                <span className="sourceLocation">{item.sourceLocation}</span>
                            </div>
                            <div>
                                <div>{item.totalDuration}</div>
                                <div></div>
                                <div>{item.stops}</div>
                            </div>
                            <div>
                                <h4>{item.destinationTime}</h4>
                                <span className="destinationLocation">{item.destinationLocation}</span>
                            </div>
                        </div>
                    </div>
                    <div className="priceClassBlock">
                    {item.priceClass.map((element, index) => {
                        return (
                            <div  key={index} className="priceClassContainer">
                            <PriceClass price={element.price} class={element.class}/>
                            </div>
                        )
                    })}
                    </div>
                </div>
                )
            })}
            <SearchSort toggleSortView={toggleSortView} /> </>: <SortFlightComponent toggleSortView={toggleSortView} fList={fList} modifyFList={modifyFList}/>}
            
        </div>
    );
};

export default SearchFlight;