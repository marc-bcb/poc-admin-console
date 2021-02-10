import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ComponentPortal, DomPortal, TemplatePortal} from '@angular/cdk/portal';

@Injectable()
export class ToolbarPortalService {

  private toolbarPortalSubject: Subject<PortalTypes> = new Subject<PortalTypes>();
  readonly toolbarPortal$: Observable<PortalTypes> = this.toolbarPortalSubject.asObservable();

  setPortal(portal: PortalTypes): void {
    this.toolbarPortalSubject.next(portal);
  }
}

export type PortalTypes = TemplatePortal | ComponentPortal<any> | DomPortal;
