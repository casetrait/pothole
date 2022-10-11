export function getOne() {
    return fetch("/api/votes").then((res) => res.json());
}