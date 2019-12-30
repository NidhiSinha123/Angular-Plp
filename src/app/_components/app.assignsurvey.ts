import { Component, OnInit } from "@angular/core";
import { SurveyModel } from "../_model/app.surveymodel";
import { UserModel } from "../_model/app.usermodel";
import { HcsService } from "../_service/app.hcsservice";

@Component({
    selector:'assignsurvey',
    templateUrl:'../_html/app.assignsurvey.html'
})
export class AssignSurveyComponent implements OnInit
{
    surveyList:SurveyModel[]=[];
    userList:UserModel[]=[];
    survey:SurveyModel={surveyId:null,
        surveyTitle:null,
        surveyType:null,
        surveyDescription:null};
    user:UserModel={userId:null,
        userPassword:null,
        userName:null,
        contactNo:null,
        userRole:null,
        userEmail:null,
        age:null,
        gender:null,
        status:null
    };
 
 
    errorMessage: any;
    
    constructor(private service:HcsService){
        
    }
    ngOnInit(): void {
        this.service.getSurvey().subscribe((surveyList:SurveyModel[]) => this.surveyList = surveyList);
        this.service.getUserList().subscribe((userList:UserModel[]) => this.userList = userList);
        }
    assignsurvey(userId:any,surveyId:any)
    {
        
        this.service.assignSurvey(userId,surveyId).subscribe((data:any)=>{alert("Survey Assigned Successfully");
        location.reload();
        
    },error=>this.errorMessage=error.error);
    alert("Survey assigned successfully");
    }
}