from django.db import models

# Create your models here.

from django.db import models

class CourseTable(models.Model):
    Department=models.CharField(max_length=150)
    CourseTitle=models.CharField(max_length=150)
    Instructor=models.CharField(max_length=150)
    #location=models.CharField(max_length=100)
    #created_at=models.DateTimeField(auto_now_add=True)