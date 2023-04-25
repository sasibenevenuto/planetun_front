import { StateModel } from "./state.model";


export class CityModel{
    cityId:number;
    name:string;
    externalCode: string;
    state: StateModel;
}