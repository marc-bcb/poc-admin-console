import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';
import {DateUtil} from '../../../core/utils/date.util';
import moment, {Moment} from 'moment';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ENTITY_TABLE_DISPLAY_COLUMNS} from './dashboard.const';
import {ToolbarPortalService} from '../../../core/services/portal/toolbar-portal.service';
import {CdkPortal} from '@angular/cdk/portal';
import {DashboardService} from '../../../core/services/entities/dashboard/dashboard.service';
import {Subscription} from 'rxjs';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DashboardDataModel} from './models/dashboard-data.model';
import {ChartDataModel} from './models/chart-data.model';

@Component({
  selector: 'bcb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DateUtil.DATE_PICKER_FORMAT}
  ]
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(CdkPortal, {static: true}) portalContent: CdkPortal;

  displayedColumns: string[] = ENTITY_TABLE_DISPLAY_COLUMNS;
  dataSource = new MatTableDataSource<DashboardDataModel>();

  endDate: Moment;
  startDate: Moment;
  momentDateRange: Array<Moment>;

  lineChartCtx: CanvasRenderingContext2D;
  lineChart: Chart;
  barChartCtx: CanvasRenderingContext2D;
  barChart: Chart;
  chartData: ChartDataModel;
  dashboardData: Array<DashboardDataModel>;

  loading = 0; // Allow for multiple loading states
  subscriptions: Subscription = new Subscription();

  constructor(private readonly toolbarPortalService: ToolbarPortalService,
              private readonly entitiesService: DashboardService) {
    this.startDate = moment(sessionStorage.getItem('dashboardStartDate') ?? moment().subtract(7, 'days'));
    this.endDate = moment(sessionStorage.getItem('dashboardEndDate') ?? undefined);
    this.momentDateRange = DateUtil._getRangeOfDates(this.startDate, this.endDate);
  }

  ngOnInit(): void {
    this.toolbarPortalService.setPortal(this.portalContent);
    this.loadDashboardData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.initCanvasSize((document.getElementById('lineChart') as HTMLCanvasElement));
    this.initCanvasSize((document.getElementById('barChart') as HTMLCanvasElement));

    this.lineChartCtx = (document.getElementById('lineChart') as HTMLCanvasElement).getContext('2d');
    this.barChartCtx = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d');

  }

  ngOnDestroy(): void {
    this.portalContent?.detach();
    this.subscriptions.unsubscribe();
  }

  loadDashboardData(): void {
    this.loading++;
    this.subscriptions.add(this.entitiesService.getDashboardData({
      start_date: this.startDate.format(DateUtil.DATE_FORMAT),
      end_date: this.endDate.format(DateUtil.DATE_FORMAT)
    })
      .subscribe((data: Array<any>) => {
        this.loading--;

        sessionStorage.setItem('dashboardStartDate', this.startDate.toLocaleString());
        sessionStorage.setItem('dashboardEndDate', this.endDate.toLocaleString());

        this.momentDateRange = DateUtil._getRangeOfDates(this.startDate, this.endDate, 'days');
        this.dashboardData = data;
        this.chartData = this.formatChartData(data);

        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;

        this.createLineChart();
        this.createBarChart();
      }, () => {

        this.loading--;
      }));
  }

  getEntityStatus(data: DashboardDataModel): string {
    if (data.entity_status === 'rejected') {
      return 'Rejected';
    }

    if (data.entity_approved) {
      return 'Approved';
    }

    if (data.entity_completed) {
      return 'Completed';
    }

    if (data.entity_started) {
      return 'Started';
    }
    return 'Invited';
  }

  private createLineChart(): void {
    this.lineChart?.destroy();
    this.lineChart = new Chart(this.lineChartCtx, {
      type: 'line',
      data: {
        labels: this.momentDateRange.map((date) => date.format('DD/MM')),
        datasets: [{
          label: 'Invited',
          backgroundColor: '#609acd',
          borderColor: '#609ACD',
          data: this.chartData.data.invited,
          fill: false,
        }, {
          label: 'Started',
          backgroundColor: '#c16161',
          borderColor: '#c16161',
          fill: false,
          data: this.chartData.data.started,
        }, {
          label: 'Completed',
          fill: false,
          backgroundColor: '#70d97f',
          borderColor: '#70D97F',
          data: this.chartData.data.completed,
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Invited vs Started vs Completed'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
          }]
        }
      }
    });
  }

  private createBarChart(): void {
    this.barChart?.destroy();
    this.barChart = new Chart(this.barChartCtx, {
      type: 'horizontalBar',
      data: {
        labels: ['Invited', 'Started', 'Completed', 'Not Complete', 'Approved', 'Rejected'],
        datasets: [{
          label: '',
          backgroundColor: ['#609acd', '#c16161', '#70d97f', '#C192D9', '#D9D652', '#D98F35'],
          data: [
            this.dashboardData.length,
            this.chartData.started,
            this.chartData.completed,
            this.chartData.notCompleted,
            this.chartData.approved,
            this.chartData.rejected
          ]
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Invited vs Started vs Completed'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              // userCallback: function(label, index, labels) {
              //   // when the floored value is the same as the value we have a whole number
              //   if (Math.floor(label) === label) {
              //     return label;
              //   }
              // },
            }
          }],
          yAxes: [{
            display: true,
          }]
        }
      }
    });
  }

  private initCanvasSize(canvas: HTMLCanvasElement): void {
    // Make it visually fill the positioned parent
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    // ...then set the internal size to match
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  private formatChartData(dashboardData: Array<DashboardDataModel>): ChartDataModel {

    const approved = dashboardData.filter(data => data.entity_approved).length;
    const completed = dashboardData.filter(data => data.entity_completed).length;
    const rejected = dashboardData.filter(data => data.entity_status === 'rejected').length;
    const started = dashboardData.filter(data => data.entity_started).length;
    const total = dashboardData.length;
    const notCompleted = started - completed;

    const formattedData = {
      approved,
      completed,
      notCompleted,
      rejected,
      started,
      total, // invited
      data: {
        invited: [],
        completed: [],
        started: [],
      }
    };

    for (const date of DateUtil._getRangeOfDates(this.startDate, this.endDate)) {
      // formattedData
      let _invited = 0;
      let _completed = 0;
      let _started = 0;

      dashboardData.filter(
        (data) => {
          if (moment(data.entity_created_at).isSame(date, 'date')) {
            _invited++;
          }
          if (moment(data.entity_completed).isSame(date, 'date')) {
            _completed++;
          }
          if (moment(data.entity_started).isSame(date, 'date')) {
            _started++;
          }
        }
      );

      formattedData.data.invited.push(_invited);
      formattedData.data.completed.push(_completed);
      formattedData.data.started.push(_started);
    }

    return formattedData;
  }

}
