import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseRetornoApiModel as BaseReturnApiModel } from "src/app/model/general/baseRetornoApi.model";
import { WciClaimModel } from "src/app/model/identity/wciClaim.model";
import { environment } from "src/environments/environment";

@Injectable()
export class WciClaimService {
    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(defaultFilter: string = ""): Observable<BaseReturnApiModel> {
        if (defaultFilter != "")
            return this.http.get<BaseReturnApiModel>(`${this.url}/api/Claim/GetListWciClaimAll?DefaultFilter=${defaultFilter}`);
        else
            return this.http.get<BaseReturnApiModel>(`${this.url}/api/Claim/GetListWciClaimAll`);
    }

    getOne(wciClaimId: number): Observable<BaseReturnApiModel> {
        return this.http.get<BaseReturnApiModel>(`${this.url}/api/Claim/GetWciClaimById?WciClaimId=${wciClaimId}`);
    }

    add(model: WciClaimModel): Observable<any> {
        return this.http.post(`${this.url}/api/Claim/GetWciClaimById`, { model, responseType: 'json' });
    }

    update(model: WciClaimModel): Observable<any> {
        return this.http.put(`${this.url}/api/Claim/GetWciClaimById`, { model, responseType: 'json' });
    }

    delete(wciClaimId: number): Observable<any> {
        return this.http.delete(`${this.url}/api/Claim/GetWciClaimById?WciClaimId=${wciClaimId}`);
    }
}