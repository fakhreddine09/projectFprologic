import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'clientMang',
        loadChildren: () => import('./components/clients-mang/clients-mang.module').then(m => m.ClientsMangModule)
      },

      {
        path: 'sample-page',
        loadChildren: () => import('./demo/extra/sample-page/sample-page.module').then(m => m.SamplePageModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    children: []
  },
  {
    path: 'reset',
    component: ResetComponent,
    children: []
  },

  // ng g m components/admin --route home --module components.module
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
