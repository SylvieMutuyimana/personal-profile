# Use the official Python image as the base image
FROM python:3.8-slim

WORKDIR /backend
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .