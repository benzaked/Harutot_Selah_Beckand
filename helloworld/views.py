from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.conf import settings
from django.shortcuts import redirect
def index (request):
    if not request.user.is_authenticated:
        return redirect('%s?next=%s' % ('admin/login', request.path))
    return render_to_response('Backend/index.html')
