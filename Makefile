all: preview serve

deploy: 
	hexo clean && hexo deploy

serve: 
	hexo server

preview: 
	hexo generate
