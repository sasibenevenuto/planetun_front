import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseRetornoApiModel } from "src/app/model/general/baseRetornoApi.model";
import { LoginModel } from "src/app/model/user/login.model";
import { NewUserModel } from "src/app/model/user/new-user.model";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {
    url = `${environment.urlApi}`;
    tokenIntranet = `${environment.tokenIntranet}`

    constructor(
        private http: HttpClient
    ) { }

    authenticate(loginModel: LoginModel): Observable<any> {
        const hashSenha = this.tokenIntranet;
        return this.http.post<any>(`${this.url}/api/Users/Authenticate`, loginModel);
    }

    logout(email: string): Observable<any> {
        return this.http.put(`${this.url}/api/Users/Logout?email=${email}`, {});
    }

    tokenUser(loginModel: LoginModel): Observable<any> {
        loginModel.tokenUser = this.tokenIntranet;
        return this.http.post(`${this.url}/api/Users/AuthenticateTokenUser`, loginModel);
    }


    getAll(pageSkip: number = 0, defaultFilter: string = ""): Observable<BaseRetornoApiModel> {
        if (defaultFilter != "")
            return this.http.get<BaseRetornoApiModel>(`${this.url}/api/Users/GetListUsersPaginationInclude?PageSkip=${pageSkip}&DefaultFilter=${defaultFilter}`);
        else
            return this.http.get<BaseRetornoApiModel>(`${this.url}/api/Users/GetListUsersPaginationInclude?PageSkip=${pageSkip}`);
    }

    createNewUser(model: NewUserModel): Observable<BaseRetornoApiModel> {
        return this.http.post<BaseRetornoApiModel>(`${this.url}/api/Users/createNewUser`, model);
    }
}