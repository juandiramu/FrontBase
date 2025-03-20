import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateUserDto } from '../../../../core/domain/entities/create.user';
import { UserRepository } from '../../../../core/ports/repositories/user.repository';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 NO agregar HttpClientModule aquí
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router, private readonly userService: UserRepository) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  createUser() {
    if (this.userForm.valid) {
      const newUser: CreateUserDto = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        number: this.userForm.value.number,
        status_Id: 1
      };

      this.userService.createUser(newUser).subscribe(() => {
        this.router.navigate(['/list']);
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
