"""helloworld URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views
admin.site.site_header = "אתר ניהול אפליקצית חרתות סלע"
urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('favicon.urls')),
    path('logout/', views.logout),
    path('', views.index, name='index'),
    path('InsertQuiz/', views.InsertQuiz, name='InsertQuiz'),
    path('Quizes', views.Quizes, name='Quizes'),
    path('Story', views.Story, name='Story'),
    path('insertQuiz', views.insertQuiz, name='insertQuiz'),
    path('Home', views.Home, name='Home'),
    path('nav', views.nav, name='nav'),




]
