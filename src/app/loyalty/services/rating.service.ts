import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {environment} from '../../../environments/environment';
import {Rating} from '../model/rating.entity';

const ratingsResourceEndpointPath = environment.ratingsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class RatingService extends BaseService<Rating> {
  constructor() {
    super();
    this.resourceEndpoint = ratingsResourceEndpointPath;
  }
}
