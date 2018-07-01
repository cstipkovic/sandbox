#!/bin/env bash

APP_FOLDER="$(pwd)"
PROJECT_NAME="node-udemy"
DOCKER_PORTS="3306:3306"

buildDockerContainer() {
	cd $APP_FOLDER
	docker image build \
		-t $PROJECT_NAME .
	docker container rm \
		-f $PROJECT_NAME
	docker container run \
		--restart=always \
		--name $PROJECT_NAME \
		-p $DOCKER_PORTS \
		-d $PROJECT_NAME
}

buildDockerContainer
