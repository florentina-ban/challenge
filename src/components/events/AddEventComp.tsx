import { IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonInput, IonFabButton, IonDatetime, IonIcon, IonSelect, IonSelectOption, IonTitle, IonToggle } from "@ionic/react";
import { useEffect, useState } from "react";

const repeatValues = ['no','daily', 'weekly', 'working days', 'custom'];
const remindValues = ['never', '15 min', '30 min', '1 h', '1 day']

const AddEventComp: React.FC = () =>{
    const [repeat, setRepeat] = useState(0);
    const [remind, setRemind] = useState(0);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [date, setDate] = useState(new Date());
    const [done, setDone] = useState(false);

    useEffect(() => {
        console.log("repeat: "+repeat +" ("+repeatValues[repeat]+")");
    }, [repeat])

    useEffect(() => {
        console.log("remind: "+remind +" ("+remindValues[remind]+")");
    }, [remind])

    useEffect(() => {
        console.log("name: "+name );
    }, [name])

    useEffect(() => {
        console.log("done: "+done.valueOf() );
    }, [done])

    return (
    <IonList id="addEventList"> Add new Task
        <IonItem>
            <IonNote>Name</IonNote>
            <IonInput slot="end" onIonChange={val => {
                if (val.detail.value)
                    setName(val.detail.value)} 
                }></IonInput>
        </IonItem>
        <IonItem>
            <IonNote>Details</IonNote>
            <IonInput slot="end" onIonChange={val => {
                if (val.detail.value)
                    setDetails(val.detail.value)} 
                }></IonInput>
        </IonItem>
        <IonItem>
            <IonNote>Date</IonNote>
            <IonDatetime slot="end"></IonDatetime>
        </IonItem>
        <IonItem>
            <IonNote>Repeat</IonNote>
            <IonSelect slot="end" className="selectItems" selectedText={repeatValues[repeat]} onIonChange={(ev)=>{
                setRepeat(ev.detail.value);
            }}>
                {repeatValues.map(rp => {return <IonSelectOption value={repeatValues.findIndex(row=>row==rp)}>{rp}</IonSelectOption>})}
            </IonSelect>
        </IonItem>
        <IonItem>
            <IonNote>Remind me</IonNote>
            <IonSelect slot="end" className="selectItems" selectedText={remindValues[remind]} onIonChange={(ev)=>{
                setRemind(ev.detail.value);
            }}>
                {remindValues.map(rp => {return <IonSelectOption value={remindValues.findIndex(row=>row==rp)}>{rp}</IonSelectOption>})}
            </IonSelect>
        </IonItem>
        <IonItem>
            <IonNote>Done</IonNote>
            <IonToggle className="toggleClass" slot="end" onIonChange={()=>setDone(!done)}></IonToggle>
        </IonItem>
        <IonItem>
            <IonFabButton slot="end" size="small"><IonIcon icon="AddOutline" /></IonFabButton>
        </IonItem>
    </IonList>
)
    }

export default AddEventComp;