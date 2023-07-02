import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TASK_URL } from "../../app.constant";

@Injectable({
  providedIn: 'root'
})
export class Screen2Service {

  constructor(public http: HttpClient) { }
  url = TASK_URL;
  getScrapData() {
    return this.http.get<any>(`${this.url}scrap`);
  }
}
