import { Component, Prop, h } from '@stencil/core';
import { SUBDIR_URI } from '../../vars';

@Component({
  tag: 'app-job-item',
  styleUrl: 'job-item.css'
})
export class JobItem {

  @Prop() job;

  render() {
    return [
      <ion-item href={`${SUBDIR_URI}/job/${this.job.id}`}>
        <ion-label>{this.job.position}</ion-label>
      </ion-item>
    ];
  }

}
