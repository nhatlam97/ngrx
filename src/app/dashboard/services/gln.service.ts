import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GlnService {

  constructor(
    private http: HttpClient
  ) { }
  private baseUrl = `${environment.baserUrl}`;
  header = new HttpHeaders({
    Authorization: 'Bearer 6685db1c-5179-4b57-8abd-d24b2c1b2bdf.w4B5AOB8',
    'Content-Type': 'application/json'
  });
  getAllGLn(query?: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/enterprise/gln`, {headers: this.header, params: query});
  }
}
