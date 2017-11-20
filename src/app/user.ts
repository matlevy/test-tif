import { Injectable } from "@angular/core";
import { Activity } from "./activity";

export class User {
  public token: string;
  public activity: Array<Activity>;
  constructor(
    public email: string,
    public password?: string,
  ) {}

  setToken( token: string ): User {
    this.token = token;
    return this;
  }
}

@Injectable()
export class UserFactory {
  create( email: string, password?: string ) {
    return new User(email, password);
  }
}
