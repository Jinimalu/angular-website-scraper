import { Component } from '@angular/core';
import { Screen2Service } from './services/screen2.service';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component {
  res:any;
  constructor(private screen2Service : Screen2Service,
    private fb: FormBuilder) {
  }
  
  ngOnInit() {
    this.res={};
    this.getScrapedData();
  }
  getScrapedData = () => {
    this.screen2Service
      .getScrapData()
      .subscribe((response: any) => {
        if (response["data"].code === 200) {
          this.res = response["data"].data;
        }
    })
  }
  
  onFileSelect = (files:Event) => {
    let fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {
      let file: File = fileList[0];
      const data = {
        id: this.res.id,
        image: file
      };
      this.screen2Service.uploadImage(data).subscribe((res: any) => {
        if (res["data"].code === 200) {
          this.res.logo = res["data"].data;
        }
      })
    }
    

  }
}
