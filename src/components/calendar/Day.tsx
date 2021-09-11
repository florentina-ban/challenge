import { IonCard, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { useState } from "react";
import { EventsAndTasks, getDayFromLocalStorage, getFromLocalStorage } from "../../services/LocalStorage";
import { getStringFromDate } from "../../utils/utils";
import { DayTask } from "../events/EventsComponent";
import "./day.css";

interface DayProps{
    date: Date,
    tasks: DayTask[]
}

const DayCal: React.FC<DayProps> = ({date}) => {
    const dayString = getStringFromDate(date);
    const dayInfo: EventsAndTasks = getDayFromLocalStorage(date);
    const [allEvents, setAllEvents] = useState(dayInfo);
    return (
        <IonCard className="currentDayContainer">
            <IonCardSubtitle>{getStringFromDate(date)}</IonCardSubtitle>
            {
                dayInfo.tasks.map(t=>{
                    return <p>{t.name}</p>
                })
            }
        </IonCard>
    );
}

export default DayCal;