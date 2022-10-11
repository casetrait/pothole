export function getAll() {
  return fetch("/api/tickets").then((res) => res.json());
}

export function deleteOne(id, options) {
  return fetch(`/api/tickets/${id}`, options).then((res) => res.json());
}

export function getYourTickets(userid) {
  return fetch(`/api/tickets/yourtickets/${userid}`).then((res) => res.json());
}
