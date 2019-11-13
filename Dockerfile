FROM nginx:stable-alpine

# copy custom nginx configs
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# copy over static assets
COPY public /usr/share/nginx/html/

EXPOSE 80
