from django.urls import path
from . import views

app_name = "quotes"

urlpatterns = [
    path('all', views.QuoteListAPIView.as_view(), name="list"),
]
