import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CutomCounterInputComponent } from "./cutom-counter-input/cutom-counter-input.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: CounterComponent,
    },
] 

@NgModule({
    declarations: [        
        CounterComponent,
        CounterOutputComponent,
        CounterButtonComponent,
        CutomCounterInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ]
})

export class CounterModule{}
