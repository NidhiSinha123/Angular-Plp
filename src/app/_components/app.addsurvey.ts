import { Component, OnInit } from "@angular/core";
import { HcsService } from "../_service/app.hcsservice";
@Component({
    selector:'addsurvey',
    templateUrl:'../_html/app.addSurvey.html'
})
export class AddSurveyComponent
{
    model:any={};
    errorMessage:any;
    constructor(private service:HcsService)
    {

    }
    addSurvey():any
    {
        this.service.addSurvey(this.model).subscribe((data:any)=>{alert("Survey added successfully");
        location.reload();
    },error=>this.errorMessage=error.error);
    }
}