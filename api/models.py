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
    profilePicture = models.ImageField(null=True,blank=True)
    status = models.BooleanField()
    createdTs = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.name

class Item(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name='items')
    itemName = models.CharField(max_length=80)
    hostel = models.CharField(max_length=50)
    room = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=10,
                                  validators=[MinLengthValidator(10)])
    lastSeen = models.CharField(max_length=150)
    status = models.BooleanField(default=True)
    createdTs = models.DateTimeField(default=datetime.now, blank=True)

