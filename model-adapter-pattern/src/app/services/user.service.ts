import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User, UserAdapter } from "../models/user.model";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private userAdapter: UserAdapter
  ) {}

  getRandomUser(): Observable<User> {
    return this.httpClient
      .get<User>("https://randomuser.me/api/")
      .pipe(map((item: any) => this.userAdapter.adapt(item.results[0])));
  }
}
