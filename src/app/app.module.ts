import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'
import {UserHomeComponent} from './_components/app.userhome';
import { AdminHomeComponent } from './_components/app.adminhome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { Error404Component } from './_components/app.error404';
import { Error403Component } from './_components/app.error403';
import { RegistrationComponent } from './_components/app.registration';
import { LoginComponent } from './_components/app.login';
import { HomeComponent } from './_components/app.home';
import { LogoutComponent } from './_components/app.logout';
import { AboutComponent } from './_components/app.about';
import { AddSurveyComponent } from './_components/app.addsurvey';
import { DeleteSurveyComponent } from './_components/app.deletesurvey';
import { AddQuestionComponent } from './_components/app.addquestion';
import { DeleteQuestionComponent } from './_components/app.deletequestion';
import { AssignSurveyComponent } from './_components/app.assignsurvey';
import { ReviewSurveyComponent } from './_components/app.reviewsurvey';
import { GiveSurveyComponent } from './_components/app.givesurvey';


const myRoute: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'adminhome', component: AdminHomeComponent},
    { path: 'userhome', component: UserHomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'forbidden', component:Error403Component}, 
    { path: 'register', component:RegistrationComponent},
    { path: 'login' ,component:LoginComponent},
    { path: 'logout', component:LogoutComponent},
    { path: 'about', component:AboutComponent},
    { path: 'addSurvey', component:AddSurveyComponent},
    { path: 'deleteSurvey', component:DeleteSurveyComponent},
    { path:'addquestion',component:AddQuestionComponent},
    { path:'deletequestion',component:DeleteQuestionComponent},
    { path:'assignsurvey' ,component:AssignSurveyComponent},
    { path: 'review',component:ReviewSurveyComponent},
    { path: 'givesurvey',component:GiveSurveyComponent},
    { path: '**', component:Error404Component}
    
  
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(myRoute),
        NgxPaginationModule,
        ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'})
        
    ],
    declarations: [
        AppComponent,
        AdminHomeComponent, UserHomeComponent, HomeComponent,
        Error404Component, Error403Component,RegistrationComponent,
        LoginComponent,LogoutComponent, AboutComponent,AddSurveyComponent,DeleteSurveyComponent,AddQuestionComponent,
        DeleteQuestionComponent,AssignSurveyComponent,ReviewSurveyComponent,GiveSurveyComponent
   	],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }