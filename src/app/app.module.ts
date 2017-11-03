import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodCalcPage } from '../pages/foodCalc/foodCalc';
import { FoodPage } from '../pages/food/food';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { IngredientCalcPage } from '../pages/ingredientCalc/ingredientCalc';
import { ImperialCookingCalcPage } from '../pages/imperialCookingCalc/imperialCookingCalc';
import { ImperialItemPage } from '../pages/imperialItem/imperialItem';
import { TradeCalcPage } from '../pages/tradeCalc/tradeCalc';
import { TradeItemPage } from '../pages/tradeItem/tradeItem';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilsProvider } from '../providers/utils/utils';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodCalcPage,
    IngredientCalcPage,
    FoodPage,
    IngredientPage,
    ImperialCookingCalcPage,
    ImperialItemPage,
    TradeCalcPage,
    TradeItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    ImperialItemPage,
    TradeCalcPage,
    TradeItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilsProvider
  ]
})
export class AppModule {}
