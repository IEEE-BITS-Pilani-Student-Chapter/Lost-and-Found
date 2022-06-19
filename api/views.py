from django.shortcuts import render
from .serializers import UserSerializer
#from .tokenExtractor import getToken
from django.http import Http404, JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
# Create your views here.

class UserDetailsView(APIView):

    def post(self, request, format=None):
        userData = request.data
        newUser = User.objects.create(
        name = userData["name"],
        email = userData["email"],
        status = True    
        )
        newUser.save()
        serializer = UserSerializer(newUser)
        return JsonResponse(serializer.data)
