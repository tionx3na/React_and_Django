from django.shortcuts import render, HttpResponse


# Create your views here.

def index(request):
    return HttpResponse('It is working')
    # Since we are creating an api we do not need to return an html template, instead we return a response
