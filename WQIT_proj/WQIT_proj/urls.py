from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from app_wqit import views

urlpatterns = [
    url(r'^',include('app_wqit.urls')),
    url(r'^about/',include('app_wqit.urls')),
    path('admin/', admin.site.urls),
]
