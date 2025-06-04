import { Price } from '../value-objects/Price';
import { ImageURL } from '../value-objects/ImageURL';
import { Slug } from '../value-objects/Slug';

export class Tour {
  constructor(
    public readonly id: string,
    public name: string,
    public thumbnail: ImageURL,
    public shortDescription: string,
    public fullDescription: string,
    public schedule: string,
    public services: string,
    public price: Price,
    public slug: Slug,
  ) {}
}
