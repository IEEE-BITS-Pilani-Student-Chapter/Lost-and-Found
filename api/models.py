from django.db import models
from datetime import datetime
from django.core.validators import MinLengthValidator
# Create your models here.
class User(models.Model):
    userId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    #phoneNumber = models.CharField(max_length=10,
     #                              validators=[MinLengthValidator(10)])
    email = models.CharField(max_length=50,unique=True)
    status = models.BooleanField()
    createdTs = models.DateTimeField(default=datetime.now, blank=True)
