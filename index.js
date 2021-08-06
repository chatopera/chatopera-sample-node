#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const { Chatbot } = require("@chatopera/sdk");
const debug = require("debug")("chatopera:sample:node");

program
  .version("1.0.0")
  .arguments("<clientId> [secret]")
  .action((clientId, secret) => {
    if (clientId) {
      let client = new Chatbot(clientId, secret);

      let prompt = () => {
        inquirer
          .prompt({ name: "send", message: "Me:" })
          .then(function (answers) {
            client
              .conversation("xiao", answers.send)
              .then((res) => {
                debug("response %s", JSON.stringify(res, null, " "));
                console.log("Bot:", res.data.string);
              })
              .catch(console.error)
              .then(() => {
                prompt();
              });
          });
      };

      prompt();
    } else {
      console.error("clientId is required");
    }
  })
  .parse(process.argv);
