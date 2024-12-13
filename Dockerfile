FROM node:15-buster

# Set the working directory
WORKDIR /opt/tron

# Set right permissions
RUN chown -R node:node /opt/tron

# Copy package.json and bower.json first to leverage Docker cache
COPY --chown=node:node package.json bower.json /opt/tron/

# Install global dependencies
RUN npm install -g gulp bower

# Switch to the node user
USER node

# Install project dependencies
RUN npm install
RUN bower install

# Copy the rest of the application code
COPY --chown=node:node ./ /opt/tron

# Build the project
RUN gulp

# Expose the application port
EXPOSE 8080

# Command to run the application
CMD ["node", "bin/curvytron.js"]