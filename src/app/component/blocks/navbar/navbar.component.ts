import {Component, DoCheck, OnInit, SimpleChanges} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  isLogin = false;
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.isLogin = localStorage.getItem("USERNAME") == null ? false : true;
  }

  logOut() {
    this.authenticationService.logout();
    this.isLogin = false;
  }
}
