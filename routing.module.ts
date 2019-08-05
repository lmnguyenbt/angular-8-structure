import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard }           from '../guard/auth.guard';
import { LayoutComponent }      from '../layouts/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                data: {
                    title: 'Dashboard',
                    permission: [],
                    preload: true,
                    delay: 50
                },
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [RouteGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
}
