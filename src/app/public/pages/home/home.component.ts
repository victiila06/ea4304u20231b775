import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {TripSummaryComponent} from '../../../registration/components/trip-summary/trip-summary.component';
import {Trip} from '../../../registration/model/trip.entity';
import {TripService} from '../../../registration/services/trip.service';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    TripSummaryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  trips: Trip[] = [];

  tripService: TripService = inject(TripService)

  ngOnInit() {
    this.tripService.getAll().subscribe((trips: Trip[]) => {
      this.trips = trips;
    });
  }
}
