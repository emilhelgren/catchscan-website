import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private httpClient: HttpClient) { }


  registerInfo(userInfo) {
    console.warn('Information in api handler service', userInfo);
  }
}


