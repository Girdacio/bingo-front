import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Bingo } from "../models/bingo.model";
import { CriarBingoData } from "../models/criar-bingo-data.model";

@Injectable({
    providedIn: 'root'
})
export class BingoService {
    constructor(private http: HttpClient) {}

    criarBingo(data: CriarBingoData): Observable<Bingo> {
        return this.http.post<Bingo>('http://localhost:3000/bingo', data)
          .pipe(
            catchError(this.handleError)
          );
      }

      private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}