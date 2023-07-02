import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Screen1Service } from './services/screen1.service';


@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  typeUrl:any;
  constructor(private router: Router,
    private screen1Service : Screen1Service) {}
  scrapUrl = () => {
    console.log(this.typeUrl,'this.typeUrl')
    const data = {
      websiteUrl: this.typeUrl
    }
    this.screen1Service
      .scrapWebsite(data)
      .subscribe((res: any) => {
        if (res["data"].code === 200) {
          console.log("Success");
          this.router.navigate(["/screen2"])
        }
  })
}

}
