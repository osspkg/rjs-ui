.PHONY: release
release: build publish

.PHONY: publish
publish:
	yarn publish --access public

.PHONY: build
build:
	yarn build
	yarn build-sb
