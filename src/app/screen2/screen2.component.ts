import { Component } from '@angular/core';
import { Screen2Service } from './services/screen2.service';
import {FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component {
  res:any;
  // scrapWebsiteForm: FormGroup = new FormGroup({});
  constructor(private screen2Service : Screen2Service,
    private fb: FormBuilder,) {
    // this.scrapWebsiteForm = fb.group(
    //   {
    //     websiteUrl:[""]
    //   })
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
          console.log("Success");
          this.res = response["data"].data;
          console.log(this.res,'res')
          console.log(this.res.websiteUrl,'res')

        }
  })
}
}
