FROM ubuntu:latest

RUN apt-get update && apt-get install -yq \
  git \
  git-lfs \
  sudo \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

# install chrome for tests
RUN apk add chromium
RUN apk add chromium-chromedriver

ENV CHROME_BIN=/usr/bin/chromium

# Create the gitpod user. UID must be 33333.
RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod

USER gitpod
