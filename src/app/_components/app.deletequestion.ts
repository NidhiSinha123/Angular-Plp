import { Component, OnInit } from "@angular/core";
import { SurveyModel } from "../_model/app.surveymodel";
import { QuestionModel } from "../_model/app.questionmodel";
import { HcsService } from "../_service/app.hcsservice";

@Component({
    selector:'deletequestion',
    templateUrl:'../_html/app.deletequestion.html'
})
export class DeleteQuestionComponent implements OnInit
{
    
        surveyList:SurveyModel[]=[];
        surveyId:any;
        questionList:QuestionModel[]=null;
        questionId:any;
    
        constructor(private service:HcsService){    
        }
    
        ngOnInit()  {

            this.surveyId=null;
            this.questionList=null;
            this.questionId=null;
            this.service.getSurvey().subscribe((surveyList:SurveyModel[]) => this.surveyList = surveyList);
        }
    
        selectSurvey(survey:SurveyModel){
            if(this.surveyId == null)
            {
                this.surveyId=survey.surveyId;
                this.surveyList=[];
                this.surveyList.push(survey);
                this.service.getQuestion(survey.surveyId).subscribe((questionList:QuestionModel[]) => this.questionList = questionList);
            }   
        }
    
        changeCenter(){
            this.ngOnInit();
        }
    
        delete(question:QuestionModel){
            this.questionId=question.questionId;
            this.questionList = [];
            this.questionList.push(question);
        }
    
        confirmDelete(){
            this.service.deleteQuestion(this.surveyId,this.questionId).subscribe(
            (data:string)=>{alert(data);
            this.service.getQuestion(this.surveyId).subscribe((questionList:QuestionModel[]) => this.questionList = questionList);
            }
            ,error => alert("Please refresh the page.")
             
            );
            // this.testId=null;
            // this.testList = [];
            // this.service.getTests(this.centerId).subscribe((testList:TestModel[]) => this.testList = testList);
            
        }
    
    }
