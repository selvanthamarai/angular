import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Iemployee } from '../interfaces/iemployee';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  baseUrl: string = 'http://localhost:3000';
  //baseStatesUrl: string = '/api/states'

  constructor(private http: HttpClient) { }


  Getalllist(): Observable<any> {
    return this.http.get(this.baseUrl + '/notes');
  }

// Insert(): Observable<any> {
//   return this.http.post(this.baseUrl + '/notes', );
// }
addEmployee(employee):Observable<any>{
  return this.http.post(this.baseUrl + '/notes', employee);
}













  // insertEmployee(employee: Iemployee): Observable<Iemployee> {
  //   return this.http.post(this.baseUrl+'/notes', employee)
  //     .pipe(
  //       map((data) => {
  //         console.log('insertCustomer status: ' + data.notes);
  //         return data.customer;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }



}
