import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/home/overview/overview.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home/:id",component:OverviewComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
