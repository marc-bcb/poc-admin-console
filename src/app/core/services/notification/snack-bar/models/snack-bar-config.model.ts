import {MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

export interface SnackBarConfigModel {
  msDuration?: number;
  dismissButtonLabel?: string;
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
  status?: 'success' | 'warn' | 'danger';
}
