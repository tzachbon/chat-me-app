import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  onOpenSnackBar(message: string, action: string, options: MatSnackBarConfig<any> = {}) {
    options.panelClass = options.panelClass || 'default-snack-bar';
    options.duration = options.duration || 5000;
    options.direction = options.direction || 'ltr';
    options.horizontalPosition = options.horizontalPosition || 'center';

    return this.snackBar.open(message, action, {
      ...options
    }).onAction();
  }
}
