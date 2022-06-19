from rest_framework import serializers
from datetime import datetime
from django.core.validators import MinLengthValidator

class UserSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)
    #phoneNumber = serializers.CharField(max_length=10,
     #                                   validators=[MinLengthValidator(10)])
    email = serializers.CharField(max_length=30)
    status = serializers.BooleanField()
    createdTs = serializers.DateTimeField(default=datetime.now)
