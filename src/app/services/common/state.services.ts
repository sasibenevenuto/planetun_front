import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { StateModel } from "src/app/model/common/state.model";
import { BaseRetornoApiModel } from "src/app/model/general/baseRetornoApi.model";

@Injectable()
export class StateService {

    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<BaseRetornoApiModel> {
        return this.http.get<BaseRetornoApiModel>(`${this.url}/api/States/GetListStatesAll`);
    }
}