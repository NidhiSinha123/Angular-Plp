import { Component } from "@angular/core";
import { HcsService } from "../_service/app.hcsservice";
import { SurveyModel } from "../_model/app.surveymodel";
import { QuestionModel } from "../_model/app.questionmodel";
import { OptionModel } from "../_model/app.optionmodel";

@Component({
    selector:'addquestion',
    templateUrl:'../_html/app.addquestion.html'
})
export class AddQuestionComponent
{
    surveyList:SurveyModel[]=[];
   // model: QuestionModel={questionId:null,questionDescription:null,questionType:null,questionOptions:null};
    model:any={};
    optionArray=[];
    optionModel=new OptionModel();
    errorMessage: any;
    QuestionType:String[]=["singlechoice","multiplechoice","singleline","multiline"];
    sMsg:string = '';
    survey1:SurveyModel={surveyId:null,surveyType:null,surveyDescription:null,surveyTitle:null};
    //survey1:SurveyModel;

    constructor(private service:HcsService){
        
    }
    ngOnInit(): void {
        this.service.getSurvey().subscribe((surveyListS:SurveyModel[]) => this.surveyList = surveyListS
        );
        this.optionArray.push(this.optionModel)
    }
    addQuestion(surveyId:any):any
    {
        alert(this.model)
        this.model.questionOptions=this.optionArray;
       if(surveyId!=undefined && surveyId!=null)
        this.service.addQuestion(surveyId,this.model).subscribe((data:any)=>{alert("Question added successfully");
       
        
        location.reload();
        
    },error => this.errorMessage= error.error);
       
    }
    addOption()
    {
       this.optionModel=new OptionModel();
       this.optionArray.push(this.optionModel)
       
      
    }
    deleteOption(index)
    {
        this.optionArray.splice(index)
    }
    
    onSubmit(questionId:any)
    {
       
        console.log(this.optionArray,this.survey1.surveyId)
        this.service.addOption(this.optionArray,this.survey1.surveyId).subscribe()
    }


   
}