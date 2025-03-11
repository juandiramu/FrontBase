import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 🚀 Importamos Router
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // 🚀 Inyectamos Router
    this.userForm = this.fb.group({
      id: [{ value: this.generateUUID(), disabled: true }],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  generateUUID(): string {
    return crypto.randomUUID();
  }

  createUser() {
    if (this.userForm.valid) {
      const newUser = this.userForm.getRawValue();
      console.log('Usuario creado:', newUser);
      setTimeout(() => {
        this.router.navigate(['/listUser']);
      }, 1000);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
