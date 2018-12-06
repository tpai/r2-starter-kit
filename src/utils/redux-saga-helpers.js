export const runWatchers = (watchers) => Object.keys(watchers).map((key) => watchers[key]());
