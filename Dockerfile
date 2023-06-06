FROM nginx:1.15
COPY /apps/x-admin/dist  /etc/nginx/html/x-admin
COPY default.conf /etc/nginx/conf.d/default.conf