import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private _snackBar: MatSnackBar,

  ) { }

  openMessageSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 3000,
      panelClass: "bottomSnackbar"
    });
  }
 }
