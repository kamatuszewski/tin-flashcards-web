import { IPaginationMetadata } from './pagination-metadata.interface';

export interface Pagination<T> {
  items: T[];
  meta: IPaginationMetadata;
}
