import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodCalcPage } from '../pages/foodCalc/foodCalc';
import { FoodPage } from '../pages/food/food';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { IngredientCalcPage } from '../pages/ingredientCalc/ingredientCalc';
import { ImperialCookingCalcPage } from '../pages/imperialCookingCalc/imperialCookingCalc';
import { ImperialItemPage } from '../pages/imperialItem/imperialItem';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodCalcPage,
    IngredientCalcPage,
    FoodPage,
    IngredientPage,
    ImperialCookingCalcPage,
    ImperialItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FoodCalcPage,
    IngredientCalcPage,
    FoodPage,
    IngredientPage,
    ImperialCookingCalcPage,
    ImperialItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
