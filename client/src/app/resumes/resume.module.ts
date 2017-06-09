import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonSchemaFormModule } from 'angular2-json-schema-form';

import { StoreModule } from '../store';

import { ResumeActions } from './resume.actions';
import { ResumeEpics } from './resume.epics';
import { ResumeEditorComponent } from './resume-editor';
import { ResumeViewComponent } from './resume-view';

@NgModule({
  declarations: [ResumeEditorComponent, ResumeViewComponent],
  exports: [ResumeEditorComponent, ResumeViewComponent],
  imports: [StoreModule, CommonModule, JsonSchemaFormModule],
  providers: [ResumeActions, ResumeEpics],
})
export class ResumeModule { }
