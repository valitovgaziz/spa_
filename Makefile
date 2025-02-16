build:
	npm run build

run:
	npm run dev

deploy:
	npm run build
	git add .
	git commit -m 'build deploy'

@default=run