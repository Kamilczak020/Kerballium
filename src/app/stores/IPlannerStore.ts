import { IPlannerModel } from '../models';

export interface IPlannerStore {
    state: IPlannerModel;
    type: string;
}
