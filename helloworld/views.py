from django.http import HttpResponse
from django.shortcuts import render_to_response
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
    param1 = request.GET.get('param1')
    print(param1)
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/Quizes.html')