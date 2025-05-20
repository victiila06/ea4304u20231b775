export class Rating {
  id: number;
  travelerId: number;
  tripId: number;
  rating: number;
  ratedAt: Date | null;

  constructor(id?: number, travelerId?: number, tripId?: number, rating?: number, ratedAt?: string) {
    this.id = id || 0;
    this.travelerId = travelerId || 0;
    this.tripId = tripId || 0;
    this.rating = rating || 0;
    this.ratedAt = ratedAt? new Date(ratedAt) : null;
  }
}
