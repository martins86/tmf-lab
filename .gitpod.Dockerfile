FROM gitpod/workspace-full-vnc

RUN sudo apt-get update \
 && sudo apt-get install -y \
    chromium-browser \
 && sudo rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium
