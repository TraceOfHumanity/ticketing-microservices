import { Publisher } from "./base-publiser";
import { TicketCreatedEvent } from "./tecket-created-event";
import { Subjects } from "./subjects";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}