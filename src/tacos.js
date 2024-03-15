import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getTacos(query) {
  await fakeNetwork(`getTacos:${query}`);
  let tacos = await localforage.getItem("tacos");
  if (!tacos) tacos = [];
  if (query) {
    tacos = matchSorter(tacos, query, { keys: ["taconame"] });
  }
  return tacos.sort(sortBy("createdAt"));
}

export async function createTaco() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let taco = { id, createdAt: Date.now() };
  let tacos = await getTacos();
  tacos.unshift(taco);
  await set(tacos);
  return taco;
}

export async function getTaco(id) {
  await fakeNetwork(`taco:${id}`);
  let tacos = await localforage.getItem("tacos");
  let taco = tacos.find(taco => taco.id === id);
  return taco ?? null;
}

export async function updateTaco(id, updates) {
  await fakeNetwork();
  let tacos = await localforage.getItem("tacos");
  let taco = tacos.find(taco => taco.id === id);
  if (!taco) throw new Error("No taco found for", id);
  Object.assign(taco, updates);
  await set(tacos);
  return taco;
}

export async function deleteTaco(id) {
  let tacos = await localforage.getItem("tacos");
  let index = tacos.findIndex(taco => taco.id === id);
  if (index > -1) {
    tacos.splice(index, 1);
    await set(tacos);
    return true;
  }
  return false;
}

function set(tacos) {
  return localforage.setItem("tacos", tacos);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
/*     setTimeout(res, Math.random() * 800); */
    setTimeout(res, 10);
  });
}