import { v4 as v4uuid } from 'uuid';

const GUEST_ID_KEY = 'guest_id';
export const getOrCreateGuestId = () => {
  let guest_id = localStorage.getItem(GUEST_ID_KEY);
  if (!guest_id) {
    guest_id = v4uuid();
    localStorage.setItem(GUEST_ID_KEY, guest_id);
  }
  return guest_id;
};
