import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GreetingComponent } from './greeting/greeting.component';
import { NgclasstrialComponent } from './ngclasstrial/ngclasstrial.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { TemReferenceComponent } from './tem-reference/tem-reference.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlighterDirective } from './customDirective/highlighter.directive';
import { DirectiveServiceComponent } from './directive-service/directive-service.component';
import { HighlightDirective } from './customDirective/highlight.directive';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { MessagingService } from './customServices/messaging.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component: UserProfilesComponent },
  { path: 'login', component: LoginComponent }, // Public route
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    NgclasstrialComponent,
    ProductListComponent,
    ProductDetailsComponent,
    TemReferenceComponent,
    UserProfileComponent,
    HighlighterDirective,
    DirectiveServiceComponent,
    HighlightDirective,
    SenderComponent,
    ReceiverComponent,
    UserProfilesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
