import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addOutline, addSharp, archiveOutline, archiveSharp, bookmarkOutline, calendarOutline, calendarSharp, heartOutline, heartSharp, helpOutline, helpSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, statsChartOutline, statsChartSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Events',
    url: '/page/Events',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: 'Calendar',
    url: '/page/Calendar',
    iosIcon: calendarOutline,
    mdIcon: calendarSharp
  },
  {
    title: 'Predict',
    url: '/page/Predict',
    iosIcon: helpOutline,
    mdIcon: helpSharp
  },
  {
    title: 'Charts',
    url: '/page/Charts',
    iosIcon: statsChartOutline,
    mdIcon: statsChartSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader id="menuTitle">Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
