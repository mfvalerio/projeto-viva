import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './event-form/event-form.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
  ],
  exports: [
     EventFormComponent   
  ]
})
export class EventsModule { }
