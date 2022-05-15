from django.urls import path
from . import views

app_name = 'quotes'

urlpatterns = [
    path('all', views.QuoteListAPIView.as_view(), name='list'),
    path('new', views.QuoteCreateAPIView.as_view(), name='create'),
    path('<int:pk>', views.QuoteInfoAPIView.as_view(), name='info'),
    path('<int:pk>/update', views.QuoteUpdateAPIView.as_view(), name='update'),
    path('<int:pk>/delete', views.QuoteDeleteAPIView.as_view(), name='delete'),
]
