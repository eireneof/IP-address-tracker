import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpLocationService {

  private apiUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_FU2fhInBLVoJatmJupwezMEhjm6LV'; 

  constructor(private http: HttpClient) { }

  getGeolocationByIp(ip: string): Observable<any> {
    const url = `${this.apiUrl}&ipAddress=${ip}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if(response) {
          return response;
        }
      }),
      catchError((error: any) => {
        return error;
      }),
    );
  }
}
