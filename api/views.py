from django.shortcuts import render
from .serializers import ItemSerializer, UserSerializer
from .tokenExtractor import getToken
from django.http import Http404, JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User,Item
# Create your views here.

class UserDetailsView(APIView):

    def getUserObject(self, email):  # Not predefined in APIView class
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise Http404
        
    def get(self, request, format=None):  # gets invoked if GET request is done
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)

        user = self.getUserObject(email)
        print(user.userType)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

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

    def patch(self, request, format=None):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)
        user = self.getUserObject(email)
        data = request.data
        user.name = data.get("name",user.name)
        user.profilePicture = data.get("profilePicture",user.profilePicture)
        user.email = data.get("email",user.email)
        user.save()
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    def delete(self, request, format=None):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)
        user = self.getUserObject(email)
        user.status = False
        user.save()
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

class ItemView(APIView):

    def getUserObject(self, email):  # Not predefined in APIView class
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)

        user = self.getUserObject(email)
        itemList = Item.objects.all()
        serializer = ItemSerializer(itemList, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)

        user = self.getUserObject(email)
        itemData = request.data
        newItem = Item.objects.create(
            user = user,
            itemName = itemData["itemName"],
            hostel = itemData["hostel"],
            room = itemData["room"],
            description = itemData["description"],
            phoneNumber = itemData["phoneNumber"],
            lastSeen = itemData["lastSeen"],
            status = True
        )
        newItem.save()
        serializer = ItemSerializer(newItem)
        return JsonResponse(serializer.data)

class ItemDetailsView(APIView):

    def getUserObject(self, email):  # Not predefined in APIView class
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise Http404
    
    def get(self, request, itemId, format=None):
        item = Item.objects.get(id=itemId)
        serializer = ItemSerializer(item)
        return JsonResponse(serializer.data)
    
    def patch(self,request,itemId,format=None):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)
        user = self.getUserObject(email)
        item = Item.objects.get(id=itemId)
        if item.user is user:
            data = request.data
            item.itemName = data.get("itemName",item.itemName)
            item.hostel = data.get("hostel",item.hostel)
            item.room = data.get("room",item.room)
            item.description = data.get("description",item.description)
            item.phoneNumber = data.get("phoneNumber",item.phoneNumber)
            item.lastSeen = data.get("lastSeen",item.lastSeen)
            item.save()
            serializer = ItemSerializer(item)
            return JsonResponse(serializer.data)
        else:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)


    def delete(self,request,itemId,format=None):
        try:
            email = getToken(request)
        except Exception:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)
        user = self.getUserObject(email)
        item = Item.objects.get(id=itemId)
        if item.user is user:
            data = request.data
            item.status = False
            item.save()
            serializer = ItemSerializer(item)
            return JsonResponse(serializer.data)
        else:
            return Response(
                {"message": "invalid token provided."},
                status=status.HTTP_401_UNAUTHORIZED)



    
    
