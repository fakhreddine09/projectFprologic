import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {AdminComponent} from './admin/admin.component'
import {SignupComponent} from './signup/signup.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { NavLogoComponent } from './admin/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './admin/navigation/nav-content/nav-content.component';
import {NavigationItem} from './admin/navigation/navigation';
import { NavGroupComponent } from './admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './admin/nav-bar/nav-bar.component';
import {NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './admin/nav-bar/nav-right/nav-search/nav-search.component';
import { NavRightComponent } from './admin/nav-bar/nav-right/nav-right.component';
import {ChatUserListComponent} from './admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import {ChatMsgComponent} from './admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    NavBarComponent,
    NavCollapseComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavLeftComponent,
    NavLogoComponent,
    NavRightComponent,
    NavSearchComponent,
    NavigationComponent,
    NavigationItem,
    ConfigurationComponent,
    ChatUserListComponent,
    FriendComponent,
    ChatMsgComponent,
    
  ],
  exports: [
  ],
})
export class ComponentsModule { }