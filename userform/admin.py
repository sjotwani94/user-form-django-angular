from django.contrib import admin
from .models import UserDetails
# Register your models here.
@admin.register(UserDetails)
class UserformAdmin(admin.ModelAdmin):
    list_display = ['name', 'date_of_birth', 'email_id', 'phone_num']
