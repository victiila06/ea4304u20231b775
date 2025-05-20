export class Trip {
  id: number;
  name: string;
  description: string;
  scheduleAt: Date | null;

  constructor(trip: {id?: number, name?: string, description?: string, scheduleAt?: string}) {
    this.id = trip.id || 0;
    this.name = trip.name || '';
    this.description = trip.description || '';
    this.scheduleAt = trip.scheduleAt ? new Date(trip.scheduleAt || 0) : null;
  }
}
