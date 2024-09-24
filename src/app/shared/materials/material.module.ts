import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
// import {
//   MAT_MOMENT_DATE_ADAPTER_OPTIONS,
//   MatMomentDateModule,
//   provideMomentDateAdapter,
// } from '@angular/material-moment-adapter';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    //MatInputModule,
    FormsModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatTabsModule,
    // MatDatepickerModule,
    //MatMomentDateModule,
    // MatSnackBarModule,
    // MatDialogModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule
  ],
  declarations: [],
  providers: [
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: { appearance: 'outline', floatLabel: 'always' },
    // },
    // provideNativeDateAdapter(),
    // //provideMomentDateAdapter(undefined, {strict: true}),
    // {
    //   provide: MAT_DATE_LOCALE,
    //   useValue: 'pt-br',
    // },
    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useValue: {
    //     duration: 2500,
    //     horizontalPosition: 'end',
    //     verticalPosition: 'top',
    //   },
    // },
  ],
})
export class MaterialModule {}
