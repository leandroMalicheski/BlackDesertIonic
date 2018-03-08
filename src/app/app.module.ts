import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FoodListPage } from '../pages/foodList/foodList';
import { FoodPage } from '../pages/food/food';
import { IngredientPage } from '../pages/foodIngredient/foodIngredient';
import { FoodIngredientListPage } from '../pages/foodIngredientList/foodIngredientList';
import { ImperialCookingListPage } from '../pages/imperialCookingList/imperialCookingList';
import { ImperialItemPage } from '../pages/imperialItem/imperialItem';
import { TradeCalcPage } from '../pages/tradeCalc/tradeCalc';
import { TradeItemPage } from '../pages/tradeItem/tradeItem';
import { HorsePage } from '../pages/horse/horse';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilsProvider } from '../providers/utils/utils';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FoodListPage,
    FoodIngredientListPage,
    FoodPage,
    IngredientPage,
    ImperialCookingListPage,
    ImperialItemPage,
    TradeCalcPage,
    TradeItemPage,
    HorsePage
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
    FoodListPage,
    FoodIngredientListPage,
    FoodPage,
    IngredientPage,
    ImperialCookingListPage,
    ImperialItemPage,
    TradeCalcPage,
    TradeItemPage,
    HorsePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilsProvider
  ]
})
export class AppModule {}
