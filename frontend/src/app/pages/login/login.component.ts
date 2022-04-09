import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/http/api.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: any;
  addSubmitted = false;

  constructor(private fb:FormBuilder, private route : Router, private notifyService: NotificationService, private apiService : ApiService) {

   }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }
  

  onSubmit(){    
    this.addSubmitted=true;
    if(this.logInForm.valid){
      this.apiService.login(this.logInForm.value).subscribe(res => {
        this.addSubmitted=false;
        this.logInForm.reset();
        if(res.code === 200){
          localStorage.setItem("user", res.name );
          this.notifyService.showSuccess(res.message, "Success");
          this.route.navigate(['/pages/dashboard'])
            .then(() => {
              window.location.reload();
            });
        } 
        else{
          this.notifyService.showError(res.message, "Error");
        }

      });
    }
  }

}
