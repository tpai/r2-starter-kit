workflow "Build and Test Time" {
  on = "push"
  resolves = ["Test on Travis CI"]
}

action "Test on Travis CI" {
  uses = "travis-ci/actions@master"
  secrets = ["TRAVIS_TOKEN"]
}
