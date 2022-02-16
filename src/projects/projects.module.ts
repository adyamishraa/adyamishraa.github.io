import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingBannerComponent } from './rotating-banner/rotating-banner.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ECommerceCategoryComponent } from './e-commerce-category/e-commerce-category.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './TimerApp/main/main.component';
import { StateMaintenanceComponent } from './TimerApp/state-maintenance/state-maintenance.component';
import { TimerLogComponent } from './TimerApp/timer-log/timer-log.component';
import { StartPauseCountComponent } from './TimerApp/start-pause-count/start-pause-count.component';
import { MainSubjectComponent } from './TimerAppSubject/main-subject/main-subject.component';
import { StateMaintenanceSubjectComponent } from './TimerAppSubject/state-maintenance-subject/state-maintenance-subject.component';
import { TimerLogSubjectComponent } from './TimerAppSubject/timer-log-subject/timer-log-subject.component';
import { StartPauseCountSubjectComponent } from './TimerAppSubject/start-pause-count-subject/start-pause-count-subject.component';
import { StudentSortingComponent } from './student-sorting/student-sorting.component';
import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';



@NgModule({
  declarations: [
    RotatingBannerComponent,
    ECommerceCategoryComponent,
    MainComponent,
    StateMaintenanceComponent,
    TimerLogComponent,
    StartPauseCountComponent,
    MainSubjectComponent,
    StateMaintenanceSubjectComponent,
    TimerLogSubjectComponent,
    StartPauseCountSubjectComponent,
    StudentSortingComponent,
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
