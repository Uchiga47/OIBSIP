
import React, {useRef, useState} from 'react';
    import {
    IonApp,
    IonHeader, 
    IonContent, 
    IonToolbar,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    
    
 } from '@ionic/react';

//  indicate which icons you would like to import
 import {calculatorOutline, refreshOutline} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';




// ********************************LOGIC *******************************************


const App: React.FC = () => {
  
  // usestate to display the reults. <number> means the that the state that will be managed will eventually be a number
  const [calculatedBmi, setcalculatedBmi] = useState<number>();
  // use refs to get the inputs from users (useRef is like a “box” that can hold a mutable value in its)
    const weightInputRef = useRef<HTMLIonInputElement>(null);//the HTMLIonInputElement allows you to manipulate the input element
    const heightInputRef = useRef<HTMLIonInputElement>(null); // null here allows you to check whether the input is faulty or not.

  // for the logic, we need to create functions
  const calculateBMI = () => {
  //the question mark makes sure the constant holds a non null object befre accessing the value
  //exclamation mark tells typescript this code will never be null 
  // the plus sign makes input a number

  const enteredWeight = weightInputRef.current!.value;
  const enteredHeight = heightInputRef.current!.value;
  
  if(!enteredHeight || !enteredWeight){
    return;
  }
  const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
  
  setcalculatedBmi(bmi);
  // console.log(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value= '';
  };

 
// *******************************FRONT END**************************************************
  return (
    <IonApp>
      {/* The header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI CALCULATOR</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Body content */}
      <IonContent className="ion-padding">
        <IonGrid>
          {/* Input & Label for height */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your height</IonLabel>
                <IonInput ref={heightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Input & Label for weight */}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your weight</IonLabel>
                <IonInput ref={weightInputRef}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Buttons in the same row */}

          <IonRow>
            {/* column for calculate btn */}
            <IonCol className="ion-text-left">
              {/* pass the calculate function to the click event */}
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start" icon={calculatorOutline}/>
                CALCULATE
              </IonButton>
            </IonCol>

            {/* column for reset btn */}
            <IonCol className="ion-text-right">
              {/* pass reset function to btn */}
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshOutline}/>
                RESET</IonButton>
            </IonCol>
          </IonRow>


          {/* row for results */}
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h3>{calculatedBmi}</h3>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
