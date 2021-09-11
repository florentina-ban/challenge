import { IonCheckbox, IonContent, IonFabButton, IonInput, IonItem, IonLabel, IonList, IonNote, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react"
import { getDayFromLocalStorage, getFromLocalStorage } from "../../services/LocalStorage";
import DayCal from "../calendar/Day";
import MyCalendar from "../calendar/MyCalendar";
import HeaderToolbarComponent from "../menu/Header";
import AddEventComp from "./AddEventComp";
import "./eventsComp.css";

//with reminder
export interface DayTask {
    id: number,
    name: string,
    details: string,
    date: Date,
    done: boolean,
    repeatable: boolean,  
    reminder: boolean  
}

const EventsComponent: React.FC = () =>{
    const currentDate = new Date();
   const dayInfo = getDayFromLocalStorage(currentDate);

  
    return(
        <IonPage>
            <HeaderToolbarComponent name="Events and tasks"/>   
            <IonContent>
                <MyCalendar display="week" ></MyCalendar>
                <DayCal date={new Date()} tasks={dayInfo.tasks}></DayCal>
                <AddEventComp/>
            </IonContent>
        </IonPage>
    );
}
export default EventsComponent;