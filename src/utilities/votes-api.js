export function addConVote(ticket, options) {
    return fetch(`/api/votes/addCon/${ticket._id}`, options).then((res) => res.json());
}

export function removeConVote(ticket, options) {
    return fetch(`/api/votes/removeCon/${ticket._id}`, options).then((res) => res.json());
}

export function addResVote(ticket, options) {
    return fetch(`/api/votes/addRes/${ticket._id}`, options).then((res) => res.json());
}

export function removeResVote(ticket, options) {
    return fetch(`/api/votes/removeRes/${ticket._id}`, options).then((res) => res.json());
}
