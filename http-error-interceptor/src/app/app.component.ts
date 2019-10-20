import { Component } from "@angular/core";
import { UserApiService } from "./user-api.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  userInfo = null;
  isLoading = false;
  errorMessage = null;

  constructor(private userApiService: UserApiService) {}

  fetchRandomUser() {
    this.isLoading = true;
    this.errorMessage = null;
    this.userApiService.getRandomUserData().subscribe(
      res => {
        this.userInfo = res;
        this.isLoading = false;
      },
      err => {
        this.errorMessage = err;
        this.isLoading = false;
      }
    );
  }

  requestWrongApi() {
    this.isLoading = true;
    this.errorMessage = null;
    this.userApiService.requestWrongApi().subscribe(
      res => {
        this.userInfo = res;
        this.isLoading = false;
      },
      err => {
        this.userInfo = null;
        this.isLoading = false;
        this.errorMessage = err;
      }
    );
  }
}
