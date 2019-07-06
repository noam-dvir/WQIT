from django.conf.urls import url
from app_wqit import views

#TEMPLATE TAGGING
app_name = "app_wqit"

urlpatterns = [
    url(r'^$',views.LandingView.as_view(),name='landing'),
    url(r'^index',views.QuoteListView.as_view(),name='index'),
    url(r'^about/$',views.AboutView.as_view(),name='about'),
]
