import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatRadioButton} from '@angular/material/radio';
import {RatingService} from '../../services/rating.service';
import {TravelerService} from '../../../registration/services/traveler.service';
import {Traveler} from '../../../registration/model/traveler.entity';
import {Rating} from '../../model/rating.entity';

@Component({
  selector: 'app-trip-rating',
  imports: [
    TranslatePipe,
    FormsModule
  ],
  templateUrl: './trip-rating.component.html',
  styleUrl: './trip-rating.component.css'
})
export class TripRatingComponent {
  bookingCode: string = '';
  ratingInput: number = 1;

  counter: number = -1;

  ratingService: RatingService = inject(RatingService);
  travelerService: TravelerService = inject(TravelerService);

  traveler: Traveler | null = null;
  rating: Rating | null = null;

  onSubmit() {
    this.travelerService.getByCode(this.bookingCode).subscribe((response: Traveler[]) => {
      this.traveler = response[0];
      if (this.traveler == null) {
        this.counter = 1; // no hay coincidencia
      } else {
        console.log(this.traveler.departedAt);
        if (this.traveler.departedAt == null) {
          this.counter = 2; // departedAt es nulo
        } else {
          this.rating = new Rating(undefined, this.traveler.id, this.traveler.tripId, this.ratingInput, new Date().toString());
          this.ratingService.create(this.rating).subscribe(response => console.log(response));
          this.counter = 3;
        }
      }
      console.log(this.traveler);
      console.log(this.counter);
    })
  }
}

