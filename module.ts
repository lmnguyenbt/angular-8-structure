import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouteGuard }      from '../guard/auth.guard';
import { RouteChildGuard } from '../guard/route.guard';
import { ShareModule }     from '../shared/commons/share.module';

import { RoutingModule } from './routing.module';

// Layout
import { LayoutComponent }     from '../layouts/layout.component';
import { HeaderComponent }     from '../layouts/header/header.component';
import { MenuComponent }       from '../layouts/menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        RoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent
    ],
    providers: [
        RouteGuard,
        RouteChildGuard
    ]
})
export class Module {
}
