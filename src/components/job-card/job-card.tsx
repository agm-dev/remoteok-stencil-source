import { Component, Prop, h } from '@stencil/core';
import { SUBDIR_URI } from '../../vars';

@Component({
  tag: 'app-job-card',
  styleUrl: 'job-card.css'
})
export class JobCard {

  @Prop() jobs;
  @Prop() name:string;

  render() {
    const job = this.jobs.find(item => Number(item.id) === Number(this.name));

    return [
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>{job.company}</ion-card-subtitle>
          <ion-card-title>{job.position}</ion-card-title>
        </ion-card-header>
        {job.logo.length ? <ion-img src={job.logo}></ion-img> : ''}
        <ion-card-content>
          {job.tags.map(tag => <ion-chip>{tag}</ion-chip>)}
        </ion-card-content>
        <ion-card-content>
          {job.description}
        </ion-card-content>
        <ion-card-content>
          <ion-button href={`${SUBDIR_URI}/`}>Other jobs</ion-button>
          <ion-button href={job.url} color="success">Apply</ion-button>
        </ion-card-content>
      </ion-card>
    ];
  }

}
