from rest_framework import serializers
from datetime import datetime
from django.core.validators import MinLengthValidator

class UserSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    #phoneNumber = serializers.CharField(max_length=10,
     #                                   validators=[MinLengthValidator(10)])
    email = serializers.CharField(max_length=30)
    profilePicture = serializers.ImageField()
    status = serializers.BooleanField()
    createdTs = serializers.DateTimeField(default=datetime.now)

class ItemSerializer(serializers.Serializer):
    itemName = serializers.CharField(max_length=80)
    hostel = serializers.CharField(max_length=50)
    room = serializers.CharField(max_length=20)
    description = serializers.CharField(max_length=200)
    phoneNumber = serializers.CharField(max_length=10,
                                  validators=[MinLengthValidator(10)])
    lastSeen = serializers.CharField(max_length=150)
    status = serializers.BooleanField()
    createdTs = serializers.DateTimeField(default=datetime.now)
    