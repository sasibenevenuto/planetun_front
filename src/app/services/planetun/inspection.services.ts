import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseRetornoApiModel as BaseReturnApiModel } from "src/app/model/general/baseRetornoApi.model";
import { InspectionModel } from "src/app/model/planetun/inspection.model";

@Injectable()
export class InspectionService {
    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    getAll(defaultFilter: string = ""): Observable<BaseReturnApiModel> {
        if (defaultFilter != "")
            return this.http.get<BaseReturnApiModel>(`${this.url}/api/Inspection/GetListInspectionAll?DefaultFilter=${defaultFilter}`);
        else
            return this.http.get<BaseReturnApiModel>(`${this.url}/api/Inspection/GetListInspectionAll`);
    }

    getOne(inspectionId: number): Observable<BaseReturnApiModel> {
        return this.http.get<BaseReturnApiModel>(`${this.url}/api/Inspection/GetInspectionById?Inspection=${inspectionId}`);
    }

    add(model: any): Observable<any> {
        return this.http.post(`${this.url}/api/Inspection`, model);
    }

    update(model: InspectionModel): Observable<any> {
        return this.http.put(`${this.url}/api/Inspection`, { model, responseType: 'json' });
    }

    delete(inspectionId: number): Observable<any> {
        return this.http.delete(`${this.url}/api/Inspection?inspectionId=${inspectionId}`);
    }
}