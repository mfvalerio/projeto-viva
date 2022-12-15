import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToobarComponent } from './toolbar/toobar.component';
import { ActionsComponent } from './actions/actions.component';
import { EventsModule } from "./events/events.module";
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptorService } from './shared/interceptors/AuthInterceptor';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ToobarComponent,
        ActionsComponent,
        LoginComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatIconModule,
        EventsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
