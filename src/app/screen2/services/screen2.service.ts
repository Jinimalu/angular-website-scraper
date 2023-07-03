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
  uploadImage(data: { id?: any; image: any;  }) {
    const formdata =  new FormData;
    formdata.append('image', data.image);
    formdata.append('id', data.id);
    formdata.append('name', 'logo');

    return this.http.post(`${this.url}upload`, formdata);
  }
}
