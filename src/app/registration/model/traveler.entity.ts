export class Traveler {
  id: number;
  firstName: string;
  lastName: string;
  tripId: number;
  bookingCode: string;
  departedAt: string;

  constructor(traveler: {id?: number, firstName?: string, lastName?: string, tripId?: number, bookingCode?: string, departedAt?: string}) {
    this.id = traveler.id || 0;
    this.firstName = traveler.firstName || '';
    this.lastName = traveler.lastName || '';
    this.tripId = traveler.tripId || 0;
    this.bookingCode = traveler.bookingCode || '';
    this.departedAt = traveler.departedAt || '';
  }
}
