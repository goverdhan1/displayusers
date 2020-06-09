import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get("https://gist.githubusercontent.com/swazza/619e53db7be4498b689cba176cab2fbf/raw/03929aa6f594818284604592353c6dd776487b0d/users.json");
  }
}
