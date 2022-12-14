import { Component, OnInit } from '@angular/core';

import { Event } from '../events/model/event';
import { EventsService } from '../services/events.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;
  displayedColumns = ['name', 'category', 'date', 'actions'];

  //eventsService: EventsService;

  constructor(
    private eventsService: EventsService, 
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    //this.events = [];
    //this.eventsService = new EventsService();
    this.events$ = this.eventsService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar eventos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }


}



