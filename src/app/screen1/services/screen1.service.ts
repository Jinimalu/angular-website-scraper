import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TASK_URL } from "../../app.constant";
@Injectable({
  providedIn: 'root'
})
export class Screen1Service {

  constructor(public http: HttpClient) { }
  url = TASK_URL;
  scrapWebsite(data: { websiteUrl: any; }) {
    return this.http.post<any>(`${this.url}scrap`, data);
  }
}
