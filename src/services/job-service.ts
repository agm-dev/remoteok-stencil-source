import { API_URL } from '../vars';
import Job from '../types/Job';

class JobService {
  private jobs:Job[] = [];

  private getJobsFromApi() {
    return fetch(API_URL)
      .then(response => response.json())
      .then(results => {
        // drop the first result which is the legal warning
        const rawJobs = results.slice(1);
        const jobs:Job[] = rawJobs.map(item => ({
          id: item.id,
          position: item.position,
          description: item.description,
          url: item.url,
          tags: item.tags,
          company: item.company,
          date: item.date,
          logo: item.company_logo,
        }));

        return jobs;
      });
  }

  public async getJobs() {
    if (!this.jobs.length) {
      console.log('[INFO]: getting jobs from API');
      const jobs = await this.getJobsFromApi();
      this.jobs = jobs;
    }

    console.log('[INFO]: returning jobs');
    return this.jobs;
  }
}

const singleton = new JobService();

export default singleton;
