import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { GreetingComponent } from './greeting/greeting.component';
import { NgclasstrialComponent } from './ngclasstrial/ngclasstrial.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { TemReferenceComponent } from './tem-reference/tem-reference.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    NgclasstrialComponent,
    ProductListComponent,
    ProductDetailsComponent,
    TemReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
