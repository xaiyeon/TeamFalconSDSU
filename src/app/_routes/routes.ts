import { Routes, CanDeactivate } from '@angular/router';
import { HomeComponent } from '../_static/home/home.component';
import { DesignComponent } from '../_static/design/design.component';
import { HardwareComponent } from '../_static/hardware/hardware.component';
import { SoftwareComponent } from '../_static/software/software.component';
import { WorkComponent } from '../_static/work/work.component';
import { AboutComponent } from '../_static/about/about.component';



export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: { page: 'home' } },
    {path: 'design', component: DesignComponent, data: { page: 'design' } },
    {path: 'hardware', component: HardwareComponent, data: { page: 'hardware' } },
    {path: 'software', component: SoftwareComponent, data: { page: 'software' } },
    {path: 'work', component: WorkComponent, data: { page: 'work' } },
    {path: 'about', component: AboutComponent, data: { page: 'about' } },
    {path: '**', redirectTo: 'home', pathMatch: 'full', data: { page: 'backhome' }}

];
