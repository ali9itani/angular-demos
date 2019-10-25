import { Component } from "@angular/core";
import { UserService } from "./services/user.service";
import { User } from "./models/user.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.requestRandomUser();
  }

  getNewRandomUser() {
    this.requestRandomUser();
  }

  private requestRandomUser() {
    this.userService.getRandomUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
