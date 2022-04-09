import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post<any>(environment.baseUrl+"/user/login",data);
  }

  signup(data:any){
    return this.http.post<any>(environment.baseUrl+"/user/signup", data);
  }
}
