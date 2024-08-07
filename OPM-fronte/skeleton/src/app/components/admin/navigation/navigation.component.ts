import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DattaConfig } from '../../../app-config';
import { AuthService } from '../../../services/auth.service'; // Update this path
import { NavigationItemService, Navigation } from './navigation'; // Update this path

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavCollapsedMob = new EventEmitter();
  public eliteConfig: any;
  public navCollapsed;
  public navCollapsedMob;
  public windowWidth: number;
  public navItems: Navigation[] = []; // Navigation items filtered by authority

  constructor(private authService: AuthService, private navigationItemService: NavigationItemService) { // Inject AuthService and NavigationItemService here
    this.eliteConfig = DattaConfig.config;
    this.windowWidth = window.innerWidth;
    this.navCollapsed = (this.windowWidth >= 992) ? this.eliteConfig['collapse-menu'] : false;
    this.navCollapsedMob = false;
  }

  ngOnInit() {
    this.loadNavigation();
  }

  loadNavigation() {
    const userAuthority = this.authService.getAuthority(); // Use authService
    this.navItems = this.navigationItemService.getFilteredNavigation(userAuthority); // Load and filter navigation items
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.onNavCollapsedMob.emit();
    }
  }
}
