// add-event.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventName: string;
  eventDate: Date;
  eventTime: string;
  eventVenue: string;
  eventDescription: string;
  eventImage: File;

  onFileSelected(event: Event) {
    this.eventImage = (event.target as HTMLInputElement).files[0];
  }

  onSubmit() {
    // Code to submit the event data to the backend API
    console.log('Event submitted successfully.');
  }
}
