SHELL=/bin/bash

install:
	yarn install --force --ignore-scripts

######################################################################

release_fix: patch build publish

release_component: minor build publish

release_current: build publish

######################################################################

build:
	yarn build
	yarn build-sb

patch:
	yarn version --patch --no-git-tag-version --no-commit-hooks

minor:
	yarn version --minor --no-git-tag-version --no-commit-hooks

major:
	yarn version --major --no-git-tag-version --no-commit-hooks

publish:
	yarn pack && yarn publish --access public
