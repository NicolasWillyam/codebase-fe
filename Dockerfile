FROM node:20-alpine AS development
# Set working directory
WORKDIR /app
#
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
# Same as npm install
RUN yarn
COPY . /app
ENV CI=true
FROM development AS build
RUN yarn build
# 2. For Nginx setup
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Copy folder đã được build vào folder chạy của nginx.
COPY --from=build /app/dist/ /usr/share/nginx/html
# # Copy file cấu hình chạy cho nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]