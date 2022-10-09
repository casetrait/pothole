export function getAll() {
    return fetch('/api/tickets').then(res => res.json());
}