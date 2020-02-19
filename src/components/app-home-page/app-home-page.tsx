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
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>There are {this.jobs.length} jobs right now!</p>

        <ion-button href={`${SUBDIR_URI}/favorites`} expand="block">Favorites</ion-button>
      </ion-content>
    ];
  }
}
