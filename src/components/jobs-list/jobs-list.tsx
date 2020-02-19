import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-jobs-list',
  styleUrl: 'jobs-list.css',
})
export class JobsList {

  @Prop() jobs;

  render() {
    return [
      <ion-list>
        {
          this.jobs.map(job => (
            <app-job-item job={job} key={job.id}></app-job-item>
          ))
        }
      </ion-list>
    ];
  }

}
