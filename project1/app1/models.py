from django.db import models

# Create your models here.
class Student(models.Model):
    fn=models.CharField(max_length=25)
    ln=models.CharField(max_length=20)
    course=models.CharField(max_length=5)