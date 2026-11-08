all: preview serve

deploy:
	npm run clean && npm run deploy

serve:
	npm run server

preview:
	npm run build
