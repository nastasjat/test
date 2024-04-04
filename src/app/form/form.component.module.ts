import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [IonicModule, ReactiveFormsModule, FormsModule],
  exports: [FormComponent]
})
export class FormModule {}