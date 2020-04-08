import { Component } from "@angular/core";

@Component({
  selector: "app-event-list",
  template: `
    <div>
      <h1>Upcoming angular events</h1>
      <hr />
      <app-event-thumbnail [event]="event"></app-event-thumbnail>
    </div>
  `,
})
export class EventListComponent {
  event = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00 am",
    price: 599.99,
    imageUrl: "../../assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England",
    },
  };

  handleEventClicked(data) {
    alert(`recived ${data}`);
  }
}
