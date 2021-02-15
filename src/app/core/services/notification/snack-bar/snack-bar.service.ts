import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarConfigModel} from './models/snack-bar-config.model';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private configDefaults: SnackBarConfigModel = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    msDuration: 1000
  };

  constructor(private readonly _snackbar: MatSnackBar) {
  }

  showSnackBar(message: string, config?: SnackBarConfigModel): void {
    this._snackbar.open(message, config?.dismissButtonLabel, {
      duration: config?.msDuration || this.configDefaults.msDuration,
      horizontalPosition: config?.horizontalPosition || this.configDefaults.horizontalPosition,
      verticalPosition: config?.verticalPosition || this.configDefaults.verticalPosition,
      panelClass: [config?.status ? `bg-${config.status}` : undefined]
    });
  }
}


