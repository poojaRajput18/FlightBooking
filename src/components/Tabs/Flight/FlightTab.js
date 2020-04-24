import React, {useState} from 'react';
import SearchFlight from './SearchFlights';

const Travellers = () => {
  return (
    <div className='separate-half'>
    <label>Traveller</label>
    <select name="Travellers">
		<option value="1 Adult">1 Adult</option>
		<option value="2 Adult">2 Adult</option>
		<option value="3 Adult">3 Adult</option>
		<option value="Children">1 Children</option>
  </select>
  </div>
  )
  
};

const Class = () => {
  return (
    <div className='separate-half'>
    <label>Class</label>
    <select name="Class">
		<option value="Economy">Economy</option>
		<option value="Basic">Basic</option>
		<option value="Main">Main</option>
  </select>
  </div>
  )
  
};

const JourneyDetails = (props) => {
  
  const [depDate, setDepartureDate] = useState();
  const date = new Date();
  const today = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;

  const checkFormValid = () => {
    const formElements = [ ...document.getElementById('myForm').elements];

    let fieldObject = {};
    formElements.map((item, index ) => {
      if ( index !== formElements.length-1 ) {
        return fieldObject[item.name] = item.value;
      } else {
        return '';
      }
    });
    console.log(fieldObject);
    props.toggleShowSearchFlight();
  };

  return (
    <div className='container'>
    <form id='myForm' onSubmit={checkFormValid}>
      <div className='form-group'>
    <label htmlFor="departure">Departure</label>
    <input type='text' id="departure" name='departure' required /><br></br>
    </div>

    <div className='form-group'>
    <label htmlFor="destination">Destination</label><br></br>
    <input type='text' id='destination' name='destination' required/><br></br>
    </div>

    <div className='form-group dates-container'>
      <div className='dates'>
        <label htmlFor="departDate">Depart date</label><br></br>
        <input type='date' id="departDate" name='departDate' min={today} required onBlur={(event)=>{setDepartureDate(event.target.value)}}/><br></br>
      </div>
      <div className='dates'>
        <label htmlFor="retuenDate">Return date</label><br></br>
        <input type='date' id="retuenDate" name='retuenDate' min={depDate} required/><br></br>
      </div>
    </div>
    
    <div className='travel-class-detail travel-class-container'>
    <Travellers />
    <Class />
    </div>
    <br></br>
        <input type="submit" value="Search flights" className='searchButton'></input> 
    </form>
  </div>
  );
};

const FlightTab  =  ( props ) => {

    return(
      <div>
        {!props.showSearchFlight ? (<div id={props.id} className={"tabcontent "+ ( props.active ? 'active' : '')}>
       
        <JourneyDetails toggleShowSearchFlight={props.toggleShowSearchFlight}/>
        
      </div>) : <SearchFlight toggleShowSearchFlight={props.toggleShowSearchFlight}/>}
      </div>
    )
};

export default FlightTab;