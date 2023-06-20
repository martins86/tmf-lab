FROM ubuntu:latest

RUN apt-get update && apt-get install -yq \
  git \
  git-lfs \
  sudo \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

# install chrome for tests
RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install ./google-chrome-stable_current_amd64.deb

ENV CHROME_BIN=/usr/bin/chromium

# Create the gitpod user. UID must be 33333.
RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod

USER gitpod
