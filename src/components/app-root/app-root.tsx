import { Component, h, State } from '@stencil/core';
import { SUBDIR_URI } from '../../vars';
import JobService from '../../services/job-service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @State() jobs = [];

  async componentWillLoad() {
    try {
      this.jobs = await JobService.getJobs();
    } catch (err) {
      console.error(`[ERROR]: failed to fetch jobs from API`, err);
    }
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url={`${SUBDIR_URI}/`} component="app-home-page" componentProps={{ jobs: this.jobs }} />
          <ion-route url={`${SUBDIR_URI}/favorites`} component="app-favorites-page" />
          <ion-route url={`${SUBDIR_URI}/job/:name`} component="app-job-card" componentProps={{ jobs: this.jobs }} ></ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
