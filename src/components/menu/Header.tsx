import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";

interface ComponentName{
    name: string
}

const HeaderToolbarComponent: React.FC<ComponentName> = ({name}) => {

    return(
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
    );

} 
export default HeaderToolbarComponent;