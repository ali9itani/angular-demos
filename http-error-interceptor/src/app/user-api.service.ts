import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  getRandomUserData() {
    return this.httpClient.get("https://randomuser.me/api/").pipe(
      map((res: any) => {
        if (res && res.results && res.results.length) {
          return res.results[0];
        } else {
          return null;
        }
      })
    );
  }

  requestWrongApi() {
    return this.httpClient.get("https://randomuser.me/wrongapi");
  }
}
