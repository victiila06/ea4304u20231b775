import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {environment} from '../../../environments/environment';
import {Trip} from '../model/trip.entity';

const tripsResourceEndpointPath = environment.tripsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class TripService extends BaseService<Trip> {

  constructor() {
    super();
    this.resourceEndpoint = tripsResourceEndpointPath;
  }
}
