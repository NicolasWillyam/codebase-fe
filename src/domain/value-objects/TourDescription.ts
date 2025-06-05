export class TourDescription {
  constructor(
    public readonly shortDescription: string,
    public readonly fullDescription: string
  ) {
    if (!shortDescription || !fullDescription) {
      throw new Error('Both short and full descriptions are required.');
    }
  }
}
