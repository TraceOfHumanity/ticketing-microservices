import { Publisher, Subjects, TicketCreatedEvent } from "@thticketsms/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
