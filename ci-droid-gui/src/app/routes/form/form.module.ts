import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';
import { StatusModule } from '../../shared/modules/status/status.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatTooltipModule
} from '@angular/material';
import { MdePopoverModule } from '@material-extended/mde';
import { PreviewActionComponent } from './preview-action/preview-action.component';
import { PreviewGithubInteractionComponent } from './preview-github-interaction/preview-github-interaction.component';

@NgModule({
  declarations: [FormComponent, PreviewActionComponent, PreviewGithubInteractionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    StatusModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatTooltipModule,
    MdePopoverModule,
    MatCardModule
  ],
  exports: [FormComponent, PreviewActionComponent, PreviewGithubInteractionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule {}
