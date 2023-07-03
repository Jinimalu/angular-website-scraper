import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Screen1Service } from './services/screen1.service';
import { FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  typeUrl:any;
  submitted = false;
  scrapWebsiteForm: FormGroup = new FormGroup({});
  constructor(private router: Router,
    private screen1Service : Screen1Service,
    private fb: FormBuilder) {
      this.scrapWebsiteForm = fb.group(
        {
          typeUrl: ["", [Validators.required]],
        })
    }
    
  get f() {
    return this.scrapWebsiteForm.controls;
  }
  onSubmit() {
    const data = {
      websiteUrl: this.typeUrl
    }
    this.submitted = true;
    if (this.scrapWebsiteForm.invalid) {

      return;
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
