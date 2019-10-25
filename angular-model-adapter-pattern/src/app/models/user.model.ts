import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class User {
  constructor(
    public name: string,
    public country: string,
    public profilePhoto: string,
    public age: number,
    public registeredDate: Date
  ) {}
}

@Injectable({ providedIn: "root" })
export class UserAdapter implements Adapter<User> {
  adapt(item: any): User {
    const name = item.name.first + " " + item.name.last;
    const country = item.location.country;
    const profilePhoto = item.picture.medium;
    const age = item.dob.age;
    const registeredDate = new Date(item.registered.date);
    return new User(name, country, profilePhoto, age, registeredDate);
  }
}
