import { Attendee } from "./Attendee";

export class Meeting {
  title: String;
  description: String;
  attendees: Array<Attendee>;
  route: Object;
  notes: Object;
}