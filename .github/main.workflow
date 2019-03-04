workflow "Test on branch created" {
  resolves = ["Test on Travis CI"]
  on = "create"
}

action "Test on Travis CI" {
  uses = "travis-ci/actions@master"
  secrets = ["TRAVIS_TOKEN"]
}

workflow "Release on tag published" {
  on = "release"
  resolves = ["Heroku Release"]
}

action "Heroku Login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "Heroku Push" {
  uses = "actions/heroku@master"
  needs = "Heroku Login"
  args = "container:push -a r2-starter-kit web"
  secrets = ["HEROKU_API_KEY"]
}

action "Heroku Release" {
  uses = "actions/heroku@master"
  needs = "Heroku Push"
  args = "container:release -a r2-starter-kit web"
  secrets = ["HEROKU_API_KEY"]
}
