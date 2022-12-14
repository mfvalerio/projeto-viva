import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from '../event-form/event-form.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'new', component: EventFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
