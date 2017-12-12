import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Feedback } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHttpmsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
  	return this.restangular.all('feedback').post(feedback);
  }

}
