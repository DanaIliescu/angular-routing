import { Component, OnInit } from '@angular/core';
import { InternshipFormComponent } from '../internship-form/internship-form.component';
import { ReportsService } from '../internship-form/internship-form.service';
import { FormGroup } from "@angular/forms/src/model";

@Component({
  selector: 'app-internships-list',
  templateUrl: './internships-list.component.html',
  styleUrls: ['./internships-list.component.css']
})
export class InternshipsListComponent implements OnInit {
  errorMessage: string;
  reports: InternshipFormComponent[];
  mode = 'Observable';

  constructor(private reportService: ReportsService) { }

  ngOnInit() {
    this.reportService.getReports()
                      .subscribe(
                        reports => this.reports = reports,
                        error => this.errorMessage = <any>error
                      );
    setTimeout(() => {
          console.log(this.reports);
    console.log(this.errorMessage);}
    , 3000);

  }

  addReport(report: FormGroup) {
    this.reportService.create(report)
                   .subscribe(
                     internship  => this.reports.push(internship),
                     error =>  this.errorMessage = <any>error);
  }

  deleteReport(report: any) {
    var internshipForm = report.data;
    console.log(internshipForm);
    var reportIndex = this.reports.indexOf(internshipForm);
    this.reportService.delete(report, report._id)
                    .subscribe(
                      internship => this.reports.splice(reportIndex, 1),
                      error => this.errorMessage = <any>error
                    );
  }
}
