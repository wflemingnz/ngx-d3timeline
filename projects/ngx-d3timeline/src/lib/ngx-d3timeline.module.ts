import { NgModule } from '@angular/core';
import { NgxD3timelineComponent } from './ngx-d3timeline.component';
import { ResourcesAxisComponent } from './resources-axis/resources-axis.component';
import { CommonModule } from '@angular/common';
import { TimeAxisComponent } from './time-axis/time-axis.component';

@NgModule({
  declarations: [
    NgxD3timelineComponent,
    ResourcesAxisComponent,
    TimeAxisComponent
  ],
  imports: [CommonModule],
  exports: [NgxD3timelineComponent]
})
export class NgxD3timelineModule {}