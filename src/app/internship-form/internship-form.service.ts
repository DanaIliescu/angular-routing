import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { InternshipFormComponent } from 'app/internship-form/internship-form.component';
import { Headers, RequestOptions } from '@angular/http';
import { FormGroup } from "@angular/forms/src/model";

@Injectable()
export class ReportsService {
  private reportsUrl = 'http://angular2api1.azurewebsites.net/api/internships/';  // URL to web API
  constructor (private http: Http) {}
  getReports(): Observable<InternshipFormComponent[]> {
    return this.http.get(this.reportsUrl + 'getall')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  create(report: FormGroup): Observable<InternshipFormComponent> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let data = {'initials': report.controls['initials'].value,
                'studentname': report.controls['studentname'].value,
                'idNumber': report.controls['idNumber'].value,
                'companyName': report.controls['companyName'].value,
                'names': report.controls['names'].value,
                'thoughts': report.controls['thoughts'].value,
                'needs': report.controls['needs'].value,
                'studentCompetencies': report.controls['studentCompetencies'].value,
                'opportunities': report.controls['opportunities'].value,
                'miscellaneous': report.controls['miscellaneous'].value,
                'suitable': report.controls['suitable'].value,
              };
    console.log(data);
    return this.http.post(this.reportsUrl + 'create', { data }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  delete(report: InternshipFormComponent, id: Number){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("deleted from service");
    return this.http.post(this.reportsUrl + 'delete/' + id, { report }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
