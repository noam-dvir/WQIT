from app_wqit.models import Quote
from django.views.generic import TemplateView,ListView


class QuoteListView(ListView):
    model = Quote
    template_name = 'app_wqit/index.html'

class AboutView(TemplateView):
    template_name = 'app_wqit/about.html'

class LandingView(TemplateView):
    template_name = 'app_wqit/landing.html'
