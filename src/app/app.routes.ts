import { Routes } from '@angular/router';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path:'wel',component:WelcomeComponent},
    {path:"prods",component:ProductListComponent},
    {path:'',redirectTo:'wel',pathMatch:"full"}
];
