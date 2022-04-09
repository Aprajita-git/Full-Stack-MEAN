import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/http/api.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:any;
  addSubmitted = false;
  public account = {
    password: <string>null
  };
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  
  constructor(private fb:FormBuilder,private route : Router, private notifyService: NotificationService, private apiService: ApiService) { }

  ngOnInit(): void {   
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email:  ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit(){
    this.addSubmitted=true;
    if(this.signupForm.valid){
      this.apiService.signup(this.signupForm.value).subscribe(res => {
        this.signupForm.reset();
        this.addSubmitted=false;
        if(res.code === 201){
          this.notifyService.showSuccess(res.message, "Success");
          this.route.navigate(['/pages/login']);
        }
        else{
          this.notifyService.showSuccess(res.message, "Error");
        }
      })
    }
  }



  checkCharacter(event){
    if((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90) || event.charCode == 32) {
      return true;
    }
    return false;
  }


  OnStrengthChange(event){

  }
}
