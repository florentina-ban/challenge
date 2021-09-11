import { DayTask } from "../components/events/EventsComponent";

export interface EventsAndTasks{
    tasks: DayTask[]
}

export function getFromLocalStorage(){
    const value = localStorage.getItem("all");
    console.log("value: "+value);
    const checkvalue = value==null || value?.length==0 ? '{ "tasks": [] }' : value;
    console.log("checkValue: " +checkvalue)
    var objects : EventsAndTasks = JSON.parse(checkvalue);
    return objects;
}

export function getDayFromLocalStorage(date: Date){
    const allDays = getFromLocalStorage()
    var allForDay: EventsAndTasks = { tasks: []}
    allForDay.tasks = allDays.tasks.filter(ts => { return ts.date===date} )
    return allForDay;
}

export function addToStorage(key: string, value: string){
    const valueFromStorage = getFromLocalStorage();
        valueFromStorage['tasks'].splice(0,0,JSON.parse(value));
    
        localStorage.setItem(key, JSON.stringify(valueFromStorage));
}