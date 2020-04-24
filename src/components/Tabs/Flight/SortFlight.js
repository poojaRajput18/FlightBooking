import React from "react";
import { sortListArray }  from './../../../configs/sortBy.json';

export default function SortFlightComponent(props) {

  function SortHeader(props) {
    return (
      <div className="sort-radio-header headerContainer">
        <button onClick={props.toggleSortView}>Back</button>
        <div className="sort-radio-header-label">
          <h4> Sort By </h4>
        </div>
      </div>
    );
  }

  function SortListView(props) {
    return (
      <div className="sort-radio-container">
        {props.sortList.map((item, index) => {
          return (
            <div key={index} className="sort-radio-element">
              <input type="radio" name="sortEvent" value={item.code} />
              <label htmlFor="male">{item.decode}</label>
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  function SortFooter(props) {
    return (
      <div className="sort-radio-footer">
        <button onClick={(props) => handleSort(props.fList)}>Done</button>
      </div>
    );
  }

  function handleSort(){
     const domElem = document.getElementsByName("sortEvent");
     let checked;
     domElem.forEach(item => {
      if (item.checked) {
        checked = item.value;
      }
     });

    const array = props.fList;
    const sorted = array.sort(function(firstElem, secondElem){
    var firstPrice = firstElem.priceClass.filter(function(elem){
      return elem.class === 'Economy';
    })
        
    var secondPrice = secondElem.priceClass.filter(function(elem){
      return elem.class === 'Economy';
    })
       
    if ( checked === "priceLowToHigh" ){
     return parseInt(firstPrice[0].price) - parseInt(secondPrice[0].price);
    } else {
     return parseInt(secondPrice[0].price) - parseInt(firstPrice[0].price);
    };
  });
    props.modifyFList(sorted);
    props.toggleSortView();
  }
  
  return (
    <div>
      <SortHeader toggleSortView={props.toggleSortView}/>
      <SortListView sortList={sortListArray} />
      <SortFooter />
    </div>
  );
}
