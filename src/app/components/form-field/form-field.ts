import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-field',
  imports: [CommonModule],
  templateUrl: './form-field.html',
  styleUrl: './form-field.css',
})
export class FormField {
  @Input() label!: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() name!: string;
  @Input() required: boolean = false;
}