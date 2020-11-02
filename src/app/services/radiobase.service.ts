import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RadiobaseService {


  private url = environment.url;
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.url}/radiobase`).pipe(
      map((resp: any) => {
        console.log(resp);

        if (resp.data) {
         
          return { headers: resp.data.headers, rows: resp.data.rows };
        } else {
          return { headers: ['Radiobase'], rows: [] };
        }

      })
    );
  }
}
