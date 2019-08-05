import { CommonModule }                                      from '@angular/common';
import { HttpClient }                                        from '@angular/common/http';
import { NgModule }                                          from '@angular/core';
import { TranslateLoader, TranslateModule }                  from '@ngx-translate/core';
import { TranslateHttpLoader }                               from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule }                  from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule }                                    from '@ng-select/ng-select';

// Export component
import { Select2Pipe, DateObjectPipe } from '../pipes';
import { NgbDateCustomParserFormatter }                      from './dateformat';
import {
    NgStickyDirective,
    NumberDirective,
    SortColumnDirective, ClickOutsideDirective
}                                      from '../directives';

// Modal
import { ModalAppModule } from '../modals/modal-app.module';

// Title header
import { PageHeaderComponent } from '../../layouts/page-header/page-header.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NgSelectModule,
        ReactiveFormsModule,
        ModalAppModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    declarations: [
        PageHeaderComponent,
        SortColumnDirective,
        Select2Pipe,
        NgStickyDirective,
        ClickOutsideDirective,
        DateObjectPipe,
        NumberDirective
    ],
    exports: [
        FormsModule,
        NgbModule,
        NgSelectModule,
        TranslateModule,
        ReactiveFormsModule,
        PageHeaderComponent,
        SortColumnDirective,
        Select2Pipe,
        NgStickyDirective,
        ClickOutsideDirective,
        DateObjectPipe,
        NumberDirective
    ],
    providers: [
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateCustomParserFormatter
        }
    ]
})
export class ShareModule {
}
