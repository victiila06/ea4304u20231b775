import {Component, inject, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';
import {Trip} from '../../model/trip.entity';
import {TravelerService} from '../../services/traveler.service';
import {RatingService} from '../../../loyalty/services/rating.service';
import {Traveler} from '../../model/traveler.entity';
import {Rating} from '../../../loyalty/model/rating.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-trip-summary',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    TranslatePipe,
    DecimalPipe
  ],
  templateUrl: './trip-summary.component.html',
  styleUrl: './trip-summary.component.css'
})
export class TripSummaryComponent implements OnInit {
  @Input() trip!: Trip;

  departed: number = 0;
  avgRating: number = 0;
  sumRating: number = 0;

  private travelerService: TravelerService = inject(TravelerService);
  private ratingService: RatingService = inject(RatingService);

  travelersList: Traveler[] = [];
  ratingList: Rating[] = [];

  ngOnInit() {
    this.travelerService.getAll().subscribe((response: Array<Traveler>) => {
      this.travelersList = response.filter((res: Traveler) => res.tripId == this.trip.id && res.departedAt != null);
      this.departed = this.travelersList.length;
    })
    this.ratingService.getAll().subscribe((response: Array<Rating>) => {
      this.ratingList = response.filter((res: Rating) => res.tripId == this.trip.id);
      this.ratingList.forEach(r => this.sumRating += r.rating);
      this.avgRating = this.sumRating / this.ratingList.length;
    })
  }
}
