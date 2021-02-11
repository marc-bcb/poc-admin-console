import {Component, Input} from '@angular/core';

@Component({
  selector: 'bcb-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() config: LoaderConfig;
}

export interface LoaderConfig {
  type?: 'bar' | 'spinner';
  color?: 'primary' | 'accent' | 'warn';
  mode?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  progress?: any;
  classes?: string;
}
