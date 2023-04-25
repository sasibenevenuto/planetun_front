import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseRetornoApiModel } from "src/app/model/general/baseRetornoApi.model";
import { environment } from "src/environments/environment";

@Injectable()
export class CityService {
    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(pageSkip: number = 0, defaultFilter: string = ""): Observable<BaseRetornoApiModel> {
        if (defaultFilter != "")
            return this.http.get<BaseRetornoApiModel>(`${this.url}/api/Cities/GetListCitiesPaginationInclude?PageSkip=${pageSkip}&DefaultFilter=${defaultFilter}`);
        else
            return this.http.get<BaseRetornoApiModel>(`${this.url}/api/Cities/GetListCitiesPaginationInclude?PageSkip=${pageSkip}`);
    }
}