import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ComponentPortal, DomPortal, TemplatePortal} from '@angular/cdk/portal';

@Injectable()
export class ToolbarPortalService {

  private toolbarPortalSubject: Subject<ToolbarPortalSubject> = new Subject<ToolbarPortalSubject>();
  readonly toolbarPortal$: Observable<ToolbarPortalSubject> = this.toolbarPortalSubject.asObservable();

  setPortal(portal: PortalTypes, operation: PortalOperation = 'append'): void {
    this.toolbarPortalSubject.next({portal, operation});
  }
}

export type PortalTypes = TemplatePortal | ComponentPortal<any> | DomPortal;
export type PortalOperation = 'replace' | 'append';

export interface ToolbarPortalSubject {
  portal: PortalTypes;
  operation: PortalOperation;
}

