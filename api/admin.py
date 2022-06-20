from django.contrib import admin
from .models import User,Item
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['userId','name','email','profilePicture','status','createdTs']

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['id','user','itemName','hostel','room','description','phoneNumber','lastSeen','status']
    

