import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../app.service";

@Component({
 selector: 'resume-view',
 templateUrl: 'resume-view.component.html'
})
export class ResumeViewComponent implements OnInit {

  public userId;

  constructor(public appState: AppState,
              public route: ActivatedRoute){}

  public ngOnInit(): void {
    this.userId = this.appState.get("user-id");
  }
}
