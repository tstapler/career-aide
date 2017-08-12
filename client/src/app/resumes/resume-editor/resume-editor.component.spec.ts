import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { ResumeEditorComponent } from './resume-editor.component';

describe(`ResumeEditor`, () => {
  let comp: ResumeEditorComponent;
  let fixture: ComponentFixture<ResumeEditorComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditorComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });
});
