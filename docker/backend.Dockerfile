FROM python:3.11
WORKDIR /app
COPY backend/ /app/
RUN pip install --upgrade pip
RUN pip install -r rquirements.txt
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]