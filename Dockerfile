FROM mongo-express

ARG envir
ENV ENVIR $envir

RUN mkdir /code
WORKDIR /code
ADD . /code/

RUN npm install --save 
RUN npm run build 

EXPOSE 3000

CMD ["npm","start" ]
