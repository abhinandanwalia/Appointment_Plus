import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DoctorComponent} from './doctor/doctor.component';
import {CreateappoinmentComponent} from './createappoinment/createappoinment.component';
import {SignupComponent} from './signup/signup.component';
import {BookappointmentComponent} from './bookappointment/bookappointment.component';
import {ManagebookingComponent} from './managebooking/managebooking.component';
import {UpdateorcancelappointmentComponent} from './updateorcancelappointment/updateorcancelappointment.component';
import {BlogComponent} from './blog/blog.component';
import {MedicalRecordsComponent} from './medical-records/medical-records.component';
import {ProfileComponent} from './profile/profile.component';
import {EditprofileComponent} from './editprofile/editprofile.component'
import { CreateblogComponent } from './createblog/createblog.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';  



const routes: Routes = 
[
{path: '',   redirectTo: '/home', pathMatch: 'full' },
{path : 'home',component : HomeComponent},
{path : 'login',component : LoginComponent},
{path : 'doctor',component : DoctorComponent},
{path : 'createappointment',component : CreateappoinmentComponent},
{path : 'signup',component : SignupComponent},
{path : 'bookappointment',component:BookappointmentComponent},
{path : 'managebooking',component : ManagebookingComponent},
{path : 'updateorcancelappointment',component : UpdateorcancelappointmentComponent},
{path : 'blogs',component : BlogComponent},
{path : 'medicalrecords',component : MedicalRecordsComponent},
{path : 'profile', component: ProfileComponent},
{path : 'editprofile', component : EditprofileComponent},
{path:'createblog',component:CreateblogComponent},
{path : 'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
