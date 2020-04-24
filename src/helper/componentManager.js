import Flight   from '../components/Tabs/Flight/FlightTab';
import Hotel    from '../components/Tabs/Hotel/HotelTab';
import Cab      from '../components/Tabs/Cab/CabTab';
import Activity from '../components/Tabs/Activity/ActivityTab';

export const launchTabSequence = new Map()
.set( 'FlightComponent',    Flight )
.set( 'HotelComponent',     Hotel )
.set( 'CabComponent',       Cab )
.set( 'ActivityComponent',  Activity )
