import { Component, Prop, h } from '@stencil/core';
import { SUBDIR_URI } from '../../vars';

@Component({
  tag: 'app-home-page',
  styleUrl: 'app-home-page.css'
})
export class AppHomePage {

  @Prop() jobs;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Remote Jobs ({this.jobs.length})</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button href={`${SUBDIR_URI}/favorites`} expand="block">Favorites</ion-button>
        <app-jobs-list jobs={this.jobs}></app-jobs-list>
      </ion-content>
    ];
  }
}
