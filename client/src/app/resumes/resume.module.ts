import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonSchemaFormModule } from 'angular2-json-schema-form';
import { SelectModule } from 'ng2-select';

import { StoreModule } from '../store';

import { ResumeActions } from './resume.actions';
import { ResumeEpics } from './resume.epics';
import { ResumeEditorComponent } from './resume-editor';
import { ResumeViewComponent } from './resume-view';
import { ResumeManagerComponent } from './resume-manager';

@NgModule({
  declarations: [
    ResumeEditorComponent,
    ResumeManagerComponent,
    ResumeViewComponent
  ],
  exports: [ResumeEditorComponent, ResumeViewComponent],
  imports: [
    StoreModule,
    CommonModule,
    JsonSchemaFormModule,
    SelectModule
  ],
  providers: [ResumeActions, ResumeEpics],
})
export class ResumeModule { }
