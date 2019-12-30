import { Component, OnInit } from "@angular/core";
import {HcsService} from '../_service/app.hcsservice';
import { Router } from "@angular/router";
import { SurveyModel } from "../_model/app.surveymodel";
@Component({
    selector:'deletesurvey',
    templateUrl:'../_html/app.deletesurvey.html'

})
export class DeleteSurveyComponent implements OnInit
{
    
    surveyList:SurveyModel[]=[];
    public popoverTitle:string='Delete Confirmation';
    public popoverMessage:string="Do you really want to delete the center";
    public confirmClicked:boolean=false;
    public cancelClicked:boolean=false;
    public popoverTitle1:string='Delete Confirmation';
    public popoverMessage1:string="Do you really want to delete the center";
    public confirmClicked1:boolean=false;
    public cancelClicked1:boolean=false;
    constructor(private service:HcsService, private router:Router){
     }
     ngOnInit(){
       
        this.service.getSurvey().subscribe((data:SurveyModel[])=>this.surveyList=data);

     }
        deleteSurvey(surveyId:any):any
        { 
        this.service.deleteSurvey(surveyId).subscribe(
            (data:string) => {
                alert(data)
                this.service.getSurvey().subscribe((data:SurveyModel[])=>this.surveyList=data);
            },
            //error => alert(error.message)
            

        );   
        
        }
        editSurvey(survey:any)
        {
            
        }
}
