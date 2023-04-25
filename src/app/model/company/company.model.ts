import { AddressModel } from "../common/address.model";
import { PhoneNumberCompanyModel } from "./phoneNumberCompany.model";
import { CompanyConfigNfeModel } from "./companyConfigNfe.model";

export class CompanyModel {
    companyId: string;
    accountId: string;
    companyConfigNfeModel: CompanyConfigNfeModel;
    tradingName: string;
    fantasyName: string;
    cNPJ: string;
    stateRegistration: string;
    cNAE: string;
    municipalityRegistration: string;
    stateRegistrationReplaceTributary: string;
    logoBase64: string;
    addressId: string;
    address:AddressModel;
    addressNumber:string;
    addressComplement:string;
    phoneNumbers: PhoneNumberCompanyModel[];
}