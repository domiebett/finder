import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() header;
  currentUser;
  subscription;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.currentUser;
    this.subscription = authService.currentUserChange
      .subscribe((user) => {
        this.currentUser = user;
      });
  }

  ngOnInit() { }

  ngOnDestroy() {
     this.subscription.unsubscribe();
   }

   /**
    * Logs a user out.
    */
  logout() {
    this.authService.logout();
  }
}
