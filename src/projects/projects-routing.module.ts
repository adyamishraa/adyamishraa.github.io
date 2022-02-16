import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RotatingBannerComponent } from './rotating-banner/rotating-banner.component';
import { ECommerceCategoryComponent } from './e-commerce-category/e-commerce-category.component';
import { MainComponent } from './TimerApp/main/main.component';
import { MainSubjectComponent } from './TimerAppSubject/main-subject/main-subject.component';
import { StudentSortingComponent } from './student-sorting/student-sorting.component';
import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';


const routes: Routes = [
  { path: 'rotating-banner', component: RotatingBannerComponent },
  { path: 'e-commerce', component: ECommerceCategoryComponent },
  { path: 'timer-app', component: MainComponent },
  {path: 'timer-app-subject', component: MainSubjectComponent},
  {path: 'student', component: StudentSortingComponent},
  {path: 'dynamic-divs', component: DynamicDivsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }
