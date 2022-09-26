import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'your perfect banking partner'
  acnt = 'enter your ac number'

  acno = ''
  psd = ''

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000 },
    1001: { acno: 1001, username: "anu", password: 1234, balance: 200000 },
    1002: { acno: 1002, username: "joyal", password: 12345, balance: 300000 },
    1003: { acno: 1003, username: "anaga", password: 123456, balance: 400000 },
  }

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    var acno = this.acno
    var psd = this.psd
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (psd == userDetails[acno]['password']){

      
      alert('login success')
    }
    else{
      alert("incorrect password")
    }
  }
    
    
    else {
      alert("user not exist or incorrect ac number")
    }
    alert("login clicked")
  }
  acchange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);


  }

  pschange(event: any) {
    this.psd = event.target.value
    console.log(this.psd);


  }
}
