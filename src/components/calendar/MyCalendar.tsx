import DayCal from "./Day";

interface MyCalendarProps{
    display: string
}


const MyCalendar: React.FC<MyCalendarProps> = ({display}) =>  {

    return (
       // <DayCal date={new Date()} events={[]} tasks={[]}></DayCal>
       <p>here will pe a scrolling calendar</p>
    );


}
export default MyCalendar;