import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingComponent } from './setting/setting.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';

const routes: Routes = [
  { path: '', redirectTo : '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { 
    path: 'setting', 
    component: SettingComponent,
    children: [
      {
        path: 'profile',
        component : SettingsProfileComponent,
      },
      {
        path:'contact',
        component: SettingsContactComponent
      }
    ]
  },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
