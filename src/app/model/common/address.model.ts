import { CityModel } from "./city.model";
import { StateModel } from "./state.model";

export class AddressModel {
    addressId: Number;
    postalCode: string;
    addressStreet: string;
    neighborhood: string;
    cityId: Number;
    city: CityModel;
    stateId: Number;
    State: StateModel;
}