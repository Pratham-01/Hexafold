import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiUrls } from '../api_urls';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(
    private http: HttpClient,
    private apiUrls: ApiUrls,
  ) { }

  handleError() {
    return (err: any) => {
      return throwError(err);
    }
  }

  getCommunityPosts(): Observable<any>{
    let url = this.apiUrls.getCommunityPosts;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    // console.log(url);
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError()));
  }

  addCommunityPosts(body:any): Observable<any>{
    let url = this.apiUrls.addCommunityPosts;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    // console.log(url);
    return this.http.post(url, body, httpOptions).pipe(catchError(this.handleError()));
  }

  updateCommunityPosts(body:any): Observable<any>{
    let url = this.apiUrls.updateCPLikeComment;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    // console.log(url);
    return this.http.patch(url, body, httpOptions).pipe(catchError(this.handleError()));
  }

}
