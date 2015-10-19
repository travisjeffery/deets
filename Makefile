lint:
	@./node_modules/.bin/eslint index.js

.PHONY: lint

test: lint
	@node test/index.js

.PHONY: test
