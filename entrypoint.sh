#!/bin/bash
cp /app/op/ENVFILE_CRT /app/exec/.env
npm install
npm run build
npm start