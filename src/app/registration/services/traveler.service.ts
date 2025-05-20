import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {environment} from '../../../environments/environment';
import {Traveler} from '../model/traveler.entity';


const travelersResourceEndpointPath = environment.travelersEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class TravelerService extends BaseService<Traveler> {

  constructor() {
    super();
    this.resourceEndpoint = travelersResourceEndpointPath;
  }
}
