import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path:"app-home",
    component:HomeComponent
  },

  {
    path:'',
    redirectTo :'app-home',
    pathMatch:'full'
  },


  { path:'app-create-account', 
  component:CreateAccountComponent
  },

  { path:'app-credit',
  component:CreditComponent
  },

  { path:'app-debit',
  component:DebitComponent
  },

  { path:'app-transfer',
  component:TransferComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
