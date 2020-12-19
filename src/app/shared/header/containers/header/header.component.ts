import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { AuthService,  } from '../../../../pages/auth/services';
import { routes } from '../../../../consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  public routers: typeof routes = routes;

  constructor(
    private userService: AuthService,
    private router: Router
  ) {
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.logOut();

    this.router.navigate([this.routers.LOGIN]);
  }
}
