from django.conf.urls import url
from app_wqit import views

#TEMPLATE TAGGING
app_name = "app_wqit"

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^help/',views.help,name='help'),
    url(r'^relative/$',views.relative,name='relative'),
    url(r'^about/$',views.about,name='about'),
]
