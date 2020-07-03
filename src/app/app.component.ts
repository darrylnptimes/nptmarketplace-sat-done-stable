import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]

})
export class AppComponent { 

}
