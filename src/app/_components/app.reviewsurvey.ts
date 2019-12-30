import { Component, OnInit } from "@angular/core";
import { UserModel } from "../_model/app.usermodel";
import { HcsService } from "../_service/app.hcsservice";
import { SurveyModel } from "../_model/app.surveymodel";

@Component({
    selector:'review',
    templateUrl:'../_html/app.reviewsurvey.html'
})
export class ReviewSurveyComponent implements OnInit
{
    userList:UserModel[]=[];
    survey:SurveyModel={surveyId:null,
        surveyTitle:null,
        surveyType:null,
        surveyDescription:null}
    surveyList:SurveyModel[]=[];    
    length1:any;
    constructor(private service:HcsService){
        
    }
    ngOnInit(): void {
        this.service.getSurvey().subscribe((surveyList:SurveyModel[]) => this.surveyList = surveyList);
      //  this.service.getUser().subscribe((userList:UserModel[]) => this.userList = userList);
        
    }
    selectSurvey(surveyId:any)
    {
        
        this.service.getUser(surveyId).subscribe((userList:UserModel[]) => this.userList = userList);
       
        this.length1=this.surveyList.length;
        //alert(this.length1)
    }
    

}