import { Component, OnInit } from "@angular/core";
import { HcsService } from "../_service/app.hcsservice";
import { QuestionModel } from "../_model/app.questionmodel";
import { SurveyModel } from "../_model/app.surveymodel";

@Component({
    selector:'givesurvey',
    templateUrl:'../_html/app.givesurvey.html'
})
export class GiveSurveyComponent implements OnInit
{
    userId:any=5;
    survey:SurveyModel={
        surveyId:null,
        surveyTitle:null,
        surveyType:null,
        surveyDescription:null
    };
    num:number=0;
    questionList:QuestionModel[]=[{ 

        questionId:1,
        questionDescription:"Appreciation for your efforts by your superiors",
        questionType:"singlechoice",
        questionOptions:["Not satisfied","Neutral","Satisfied","Very Satisfied"]},
        {
        questionId:2,
        questionDescription:"Things you like about your Organization",
        questionType:"multiplechoice",
        questionOptions:["Worklife balance","Job Ethics","Environment","All of these"]
        },
        {
        questionId:3,
        questionDescription:"Do you think the environment at work helps you strike the right balance between your work life and personal life?",
        questionType:"singleline",
        questionOptions:null
        }
        ,
        {
        questionId:4,
        questionDescription:"How purposeful do you find your work to be?",
        questionType:"multiline",
        questionOptions:null
        }
    ]
        
       
    questionListLength:number;
    constructor(private service:HcsService){
        
    }
    ngOnInit(): void {
        this.questionListLength=this.questionList.length;
       // console.log(this.userId)
       // this.service.getSurveyId(this.userId).subscribe((survey:SurveyModel) =>this.survey=survey );
       // console.log(this.survey)
       // this.service.getQuestion(this.surveyId).subscribe((questionList:QuestionModel[]) => this.questionList = questionList)
       // this.questionListLength=this.questionList.length;
        //console.log(this.questionListLength)

        
    }
    nextQuestion(){
        this.num += 1;
        if(this.num>=this.questionList.length){
            alert("Survey Finished Successfully");
        this.service.submitSurvey(this.questionList,this.userId).subscribe(), error=>alert(error.error);
        }
    }

    
    

}