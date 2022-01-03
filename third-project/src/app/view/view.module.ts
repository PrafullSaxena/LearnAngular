import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiwCompComponent } from './veiw-comp/veiw-comp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VeiwCompComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VeiwCompComponent
  ]
})
export class ViewModule { }
