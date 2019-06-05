from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index (request):
    return render(request,'app_wqit/index.html')

def help(request):
    helpdict = {'help_insert':'HELP PAGE'}
    return render(request,'app_wqit/help.html',context=helpdict)

def about(request):
    return render(request,'app_wqit/about.html')

def relative(request):
    return render(request,'app_wqit/relative_url_templates.html')
