import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About {
  readonly birthDates = {
    nils: new Date('2015-08-25'),
    anna: new Date('1982-02-06'),
    mikael: new Date('1978-10-30'),
    selma: new Date('2011-03-31'),
  };

  public calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  get ageOfNils() {
    return this.calculateAge(this.birthDates.nils);
  }

  get ageOfAnna() {
    return this.calculateAge(this.birthDates.anna);
  }

  get ageOfMikael() {
    return this.calculateAge(this.birthDates.mikael);
  }

  get ageOfSelma() {
    return this.calculateAge(this.birthDates.selma);
  }
}
