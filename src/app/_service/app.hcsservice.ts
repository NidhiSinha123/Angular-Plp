import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
export class User{
    constructor(
      public status:string,
       ) {}   
  }


@Injectable({
    providedIn: 'root'
})
export class HcsService {
    
    
    
    userObject:any;

    constructor(private myhttp: HttpClient) { }

    addOption(option,surveyId:any) {
        return this.myhttp.post("http://localhost:9156/addOption?surveyId="+surveyId,option);
    }

    getSurveyId(userId: any) {
        
          return this.myhttp.get("http://localhost:9156/getSurveyId?userId="+userId);
       // return this.myhttp.get("http://localhost:9156/getSurveyId?userId="+userId);
    }

    getSurvey() {
        return this.myhttp.get("http://localhost:9156/showAllSurvey");
    }

    addSurvey(model: any) {
        return this.myhttp.post("http://localhost:9156/addSurvey",model);
    }
    deleteQuestion(surveyId: any, questionId: any) {
        return this.myhttp.delete("http://localhost:9156//deletequestion?surveyId="+surveyId+"&questionId="+questionId);
    }
    getQuestion(surveyId: any) {
        return this.myhttp.get("http://localhost:9156/getquestion?surveyId="+surveyId);
     }
    addQuestion(surveyId:any,model: any) {

        return this.myhttp.post("http://localhost:9156/addquestion?surveyId="+surveyId,model);
    }
    getUserList() {
        return this.myhttp.get('http://localhost:9156/getUserList');
    }
    getUser(surveyId:any) {
        return this.myhttp.get('http://localhost:9156/getUser?surveyId='+surveyId);
    }

    assignSurvey(userId: any, surveyId: any) {
        return this.myhttp.post("http://localhost:9156//assignSurvey?userId="+userId+"&surveyId="+surveyId,null);
    }

     
    deleteSurvey(surveyId: any) {
        return this.myhttp.delete("http://localhost:9156/deleteSurvey?surveyId="+surveyId);
     
    }
   
    logOut() {
       
    }

    register(newUser: any){
        return this.myhttp.post('http://localhost:9156/register', newUser);
   }
   submitSurvey(questions: any,userId:any) {
    return this.myhttp.post('http://localhost:9156/submitSurvey?userId='+userId,null);
}
   
    
}