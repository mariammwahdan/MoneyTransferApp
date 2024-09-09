import { Validators } from "@angular/forms";
import { years } from "../../core/environment/signup-info.component";


const currentYear = new Date().getFullYear();
// for (let year = 1990; year <= currentYear; year++) {
//   years.push(year);
// }

export const signupValidators = {
    name: [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    email: [Validators.required, Validators.email],
    password: [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/)],
    day: [Validators.required, Validators.min(1), Validators.max(31)],
    year: [Validators.min(1990), Validators.max(currentYear)]
}
