import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemserviceService } from '../itemservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder : FormBuilder, private router: Router, private sellerService: ItemserviceService) { }
  userForm : any;
  ngOnInit(): void {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.sellerService.login(loginPayload).subscribe(data => {
      //debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        window.localStorage.setItem('sellerName', data.result.username);
        window.localStorage.setItem('sellerId', data.result.sellerId);
        //console.log("tokennnnnnn "+data.result.token+" usernameeeeeeeee "+data.result.username+" buyerrid"+data.result.sellerId);
        this.router.navigateByUrl("/dashboard");
      }else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

}
