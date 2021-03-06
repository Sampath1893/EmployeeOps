import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule } from '@angular/material';
import { ProfileComponent } from './Profile/Profile.component';

import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes = [
  {path : '',component:MyNavComponent,canActivate: [AuthGuard],

  children:[
    {path : 'Profile', component: ProfileComponent},
    // {path : 'second-page', component:SecondPageComponent},
    // {path : 'third-page', component: ThirdPageComponent}
  ]
},
  {path : 'login',component:LoginComponent},
  


{ path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ProfileComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule
    
  ],
  providers: [
    AuthGuard,
    AuthenticationService
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
