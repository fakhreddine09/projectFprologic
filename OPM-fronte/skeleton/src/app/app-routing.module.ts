import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './components/components-routing.module';




const routes: Routes = [
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  // Add other routes here if needed
  { path: '**', redirectTo: '/login' }]; // Wildcard route for a 404 page];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
