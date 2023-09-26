import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { SectionListComponent } from './section-list/section-list.component';
import { FilterBySectionPipe } from './filter-by-section.pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    SectionListComponent,
    FilterBySectionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
