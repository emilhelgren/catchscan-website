import { ApiHandlerService } from './../api-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
  registrationForm;

  constructor(
    private apiHandler: ApiHandlerService,
    private formBuilder: FormBuilder) { 
      this.registrationForm = this.formBuilder.group({
        name: '',
        email: '',
        insta: ''
      });
    }

  ngOnInit(): void {
  }

  onSubmit(userInfo) {
    try {
      //send data til API
      this.apiHandler.registerInfo(userInfo);
    } catch {
      //vis en fejlmeddelelse
    }
    this.registrationForm.reset();

    
  }

}
