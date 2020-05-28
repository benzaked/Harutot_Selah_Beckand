from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.contrib import auth
from django.shortcuts import render
from django.conf import settings
from django.shortcuts import redirect



def index (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/index.html')

def InsertQuiz (request):

    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/InsertQuiz.html')


def Quizes (request):

    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/Quizes.html')


def Story (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/Story.html')


def insertQuiz (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/InsertQuiz.html')


def Home (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/Home.html')


def nav (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/nav.html')
def logout(request):
    auth.logout(request)

    return redirect('index')
