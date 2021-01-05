from django.db import models

# Create your models here.
class UserDetails(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    email_id = models.EmailField(max_length=250)
    phone_num = models.CharField(max_length=15)