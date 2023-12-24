FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

RUN npm install -g aws-cdk

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip -u awscliv2.zip && \
    sudo ./aws/install --update