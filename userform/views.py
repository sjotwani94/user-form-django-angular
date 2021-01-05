from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404

from .models import UserDetails

def user_form(request):
    if request.method == 'POST':
        if request.POST.get('name') and request.POST.get('date_of_birth') and request.POST.get('email_id') and request.POST.get('phone_num'):
            userdetails = UserDetails()
            userdetails.name = request.POST.get('name')
            userdetails.date_of_birth = request.POST.get('date_of_birth')
            userdetails.email_id = request.POST.get('email_id')
            userdetails.phone_num = request.POST.get('phone_num')
            userdetails.save()
            alluserdetails = UserDetails.objects.all()
            return render(request, 'home.html', {'userdetails': alluserdetails})
    else:
        return render(request, 'user_form.html')

def all_submitted_forms(request):
    userdetails = UserDetails.objects.all()
    return render(request, 'home.html', {'userdetails': userdetails})

def submitted_form(request, user_id):
    try:
        userdetail = UserDetails.objects.get(id=user_id)
    except UserDetails.DoesNotExist:
        raise Http404('User Doesn\'t Exist')
    return render(request, 'user_details.html', {'userdetail': userdetail})