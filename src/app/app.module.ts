import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { datePipe } from './first-task/date-pipe.pipe';
import { FirstTaskComponent } from './first-task/first-task.component';
import { firstTaskDirective } from './first-task/first-task.directive';
import { namesArr } from './first-task/names-pipe.pipe';
import { paintDirective } from './second-task/paint.directive';
import { SecondTaskComponent } from './second-task/second-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    firstTaskDirective,
    datePipe,
    namesArr,
    paintDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
